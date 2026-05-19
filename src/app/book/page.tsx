import Link from "next/link";

export const metadata = {
  title: "Pick your strategy call slot — RoofVoice AI",
  robots: { index: false, follow: false },
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/d/example/strategy-call";

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ lead_id?: string }>;
}) {
  const params = await searchParams;
  const leadId = params.lead_id ?? "";

  const embedSrc = `${CALENDLY_URL}?embed_domain=roofvoice.ai&embed_type=Inline&hide_event_type_details=0&hide_gdpr_banner=1${
    leadId ? `&utm_term=${encodeURIComponent(leadId)}` : ""
  }`;

  return (
    <>
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 pulse-dot" />
            <span className="font-semibold tracking-tight text-white">
              RoofVoice<span className="text-orange-500">.</span>AI
            </span>
          </Link>
          <Stepper current={2} />
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-12 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-orange-400/90">
              Step 2 of 3
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-xl leading-tight">
              Pick a slot for your free strategy call.
            </h1>
            <p className="mt-4 text-white/55 max-w-xl">
              30 minutes. Bring your monthly call volume and current CRM. We
              walk out with your AI Voice Agent deployment plan.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/80 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/60 to-orange-500/0" />
              <iframe
                src={embedSrc}
                title="Schedule your strategy call"
                className="w-full bg-white"
                style={{ minHeight: 720, border: "none" }}
                loading="lazy"
              />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 h-fit">
            <Panel title="What we'll cover">
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  "Your storm-season call volume audit",
                  "Live demo of an AI Voice Agent trained on a similar roofer",
                  "Custom deployment plan (CRM, scripts, transfer rules)",
                  "Transparent pricing — no proposals, no surprises",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    {line}
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="Who's running the call">
              <p className="text-sm text-white/70 leading-relaxed">
                A senior deployment engineer who has launched voice agents for
                40+ contractors across TX, FL, ON, and CO. Not a sales rep.
              </p>
            </Panel>

            <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-400">
                Pro tip
              </p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Pick a slot in the next 48 hours. Storm-season calendars fill
                fast and our team caps onboardings at 6 / week.
              </p>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} RoofVoice AI · Step 2 of 3
      </footer>
    </>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Stepper({ current }: { current: 1 | 2 | 3 }) {
  const labels = ["Form", "Book", "Watch"] as const;
  return (
    <ol className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
      {labels.map((label, i) => {
        const step = (i + 1) as 1 | 2 | 3;
        const active = step === current;
        const done = step < current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={
                active
                  ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-black font-semibold"
                  : done
                    ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-orange-300 font-semibold"
                    : "inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-white/40"
              }
            >
              {step}
            </span>
            <span className={active ? "text-orange-400" : ""}>{label}</span>
            {i < 2 && <span className="mx-2 h-px w-6 bg-white/10" />}
          </li>
        );
      })}
    </ol>
  );
}
