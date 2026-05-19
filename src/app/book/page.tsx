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
      <header className="bg-black text-white">
        <div className="mx-auto max-w-[1024px] h-11 px-5 flex items-center justify-between text-[12px]">
          <Link href="/" className="flex items-center gap-1.5 text-white/85 hover:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            RoofVoice
          </Link>
          <Stepper current={2} />
        </div>
      </header>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[1024px] px-5 pt-16 pb-8 text-center">
          <p className="eyebrow text-action">Step 2 of 3</p>
          <h1 className="headline-tile mt-3 max-w-[720px] mx-auto">
            Pick a slot for your free strategy call.
          </h1>
          <p className="lead mt-4 text-ink-80 max-w-[560px] mx-auto">
            30 minutes. Bring your monthly call volume and current CRM. We walk
            out with your AI Voice Agent deployment plan.
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-[1024px] px-5 pb-20 pt-6 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10">
          <div className="rounded-[18px] border border-hairline bg-canvas overflow-hidden">
            <iframe
              src={embedSrc}
              title="Schedule your strategy call"
              className="w-full bg-canvas"
              style={{ minHeight: 720, border: "none" }}
              loading="lazy"
            />
          </div>
          <aside className="space-y-5 lg:sticky lg:top-28 h-fit">
            <Panel title="What we'll cover">
              <ul className="space-y-3 text-[15px] text-ink-80">
                {[
                  "Your storm-season call volume audit",
                  "Live demo of an AI Voice Agent trained on a similar roofer",
                  "Custom deployment plan (CRM, scripts, transfer rules)",
                  "Transparent pricing — no proposals, no surprises",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-action" />
                    {line}
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel title="Who's running the call">
              <p className="text-[15px] text-ink-80 leading-relaxed">
                A senior deployment engineer who has launched voice agents for
                40+ contractors across TX, FL, ON, and CO. Not a sales rep.
              </p>
            </Panel>
            <div className="rounded-[18px] border border-action/20 bg-action/[0.04] p-6">
              <p className="eyebrow text-action">Pro tip</p>
              <p className="mt-2 text-[15px] text-ink-80 leading-relaxed">
                Pick a slot in the next 48 hours. Storm-season calendars fill
                fast — we cap onboardings at 6 / week.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-parchment border-t border-hairline py-8 text-center text-[12px] text-ink-48">
        © {new Date().getFullYear()} RoofVoice AI · Step 2 of 3
      </footer>
    </>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[18px] border border-hairline bg-canvas p-6">
      <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Stepper({ current }: { current: 1 | 2 | 3 }) {
  const labels = ["Form", "Book", "Watch"] as const;
  return (
    <ol className="hidden sm:flex items-center gap-2 text-[12px] text-white/60">
      {labels.map((label, i) => {
        const step = (i + 1) as 1 | 2 | 3;
        const active = step === current;
        const done = step < current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={
                active
                  ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-black font-medium"
                  : done
                    ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-white"
                    : "inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-white/40"
              }
            >
              {step}
            </span>
            <span className={active ? "text-white" : ""}>{label}</span>
            {i < 2 && <span className="mx-1 h-px w-5 bg-white/15" />}
          </li>
        );
      })}
    </ol>
  );
}
