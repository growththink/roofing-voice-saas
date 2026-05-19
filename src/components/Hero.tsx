import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 pulse-dot" />
            Built for US &amp; Canada roofing contractors
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Book <span className="text-orange-500">5+ roofing jobs</span> this
            month — powered by your{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              AI Voice Agent
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            Storm-ready voice agents that pick up <em>every</em> after-hours
            call, qualify the lead, and drop the appointment straight on your
            calendar — fully trained in 48 hours.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            {[
              "Handles 100+ simultaneous storm-surge calls",
              "Books straight into your existing CRM (GHL, Jobber, ServiceTitan)",
              "Speaks insurance &amp; claim language — qualifies in < 90s",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <Check />
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/40">
            <span>30-day money-back</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>48-hour setup</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>No long-term contract</span>
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 p-6 shadow-[0_30px_80px_-20px_rgba(249,115,22,0.25)]">
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
                Free strategy call
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Tell us about your roofing biz
              </h3>
              <p className="mt-1 text-sm text-white/50">
                30-second form. We&apos;ll show you your slots next.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10.5l4 4 8-9" />
      </svg>
    </span>
  );
}
