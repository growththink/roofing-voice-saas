import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GATED_PATHS = ["/book", "/watch"] as const;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const gated = GATED_PATHS.find(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (!gated) return NextResponse.next();

  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const hasLeadParam =
    searchParams.has("lead_id") ||
    searchParams.has("invitee") ||
    searchParams.has("event");

  const referer = request.headers.get("referer") ?? "";
  const sameOriginRef =
    referer && referer.startsWith(request.nextUrl.origin);

  if (hasLeadParam || sameOriginRef) {
    return NextResponse.next();
  }

  const home = request.nextUrl.clone();
  home.pathname = "/";
  home.search = "";
  return NextResponse.redirect(home);
}

export const config = {
  matcher: ["/book/:path*", "/watch/:path*"],
};
