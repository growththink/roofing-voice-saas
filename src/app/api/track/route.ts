import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[track]", body);
    }
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.N8N_WEBHOOK_TOKEN
          ? { "X-Webhook-Token": process.env.N8N_WEBHOOK_TOKEN }
          : {}),
      },
      body: JSON.stringify({
        ...((body as object) ?? {}),
        ua: request.headers.get("user-agent") ?? "",
        referer: request.headers.get("referer") ?? "",
        ip: request.headers.get("x-forwarded-for") ?? "",
      }),
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "forward_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, forwarded: true });
}
