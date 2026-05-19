import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-[1024px] px-5 pt-20 pb-24 sm:pt-24 sm:pb-28 text-center">
        <p className="eyebrow text-action">For US &amp; Canada roofing contractors</p>
        <h1 className="headline-hero mt-4 text-ink max-w-[920px] mx-auto">
          Book 5+ roofing jobs<br className="hidden sm:block" /> this month.
        </h1>
        <p className="lead mt-5 text-ink-80 max-w-[640px] mx-auto">
          A storm-ready AI Voice Agent that picks up every after-hours call,
          qualifies the lead, and books the appointment — live in 48 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#book-call"
            className="inline-flex items-center rounded-full bg-action text-white px-[22px] h-11 text-[17px] font-normal scale-press hover:bg-action-focus transition"
          >
            Get started
          </a>
          <a
            href="#how"
            className="inline-flex items-center rounded-full text-action px-[22px] h-11 text-[17px] font-normal border border-action/40 hover:bg-action/[0.04] transition scale-press"
          >
            Learn more &nbsp;›
          </a>
        </div>
        <p className="mt-6 text-[14px] text-ink-48">
          30-day money-back · 48-hour setup · No long-term contract
        </p>
      </div>

      <div className="mx-auto max-w-[1024px] px-5">
        <DemoCard />
      </div>

      <div className="bg-parchment border-t border-hairline/60">
        <div className="mx-auto max-w-[1024px] px-5 py-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
          <div>
            <p className="eyebrow text-action">Free strategy call</p>
            <h2 className="headline-tile mt-3">Tell us about your roofing business.</h2>
            <p className="lead mt-4 text-ink-80 max-w-[440px]">
              30-second form. We&apos;ll show you your call slots next, then a 5-minute walkthrough.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-ink-80">
              {[
                "Handles 100+ simultaneous storm-surge calls",
                "Books straight into GHL, Jobber, ServiceTitan, AccuLynx",
                "Speaks insurance & claim language — qualifies in <90s",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <CheckGlyph />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[18px] bg-canvas border border-hairline p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoCard() {
  return (
    <div className="relative rounded-[18px] bg-tile-1 text-white overflow-hidden mb-16">
      <div className="px-8 sm:px-16 pt-16 pb-12 grid md:grid-cols-[1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="eyebrow text-sky">Live preview</p>
          <h2 className="headline-tile mt-3 text-white">
            Your phone never rings unanswered.
          </h2>
          <p className="lead mt-4 text-[#cccccc] max-w-[440px]">
            One agent. Hundreds of parallel storm-season calls. Zero missed jobs.
          </p>
          <a
            href="#how"
            className="inline-flex items-center mt-7 text-[17px] text-sky hover:underline"
          >
            See how it works &nbsp;›
          </a>
        </div>
        <CallTranscript />
      </div>
    </div>
  );
}

function CallTranscript() {
  const lines: Array<{ side: "ai" | "caller"; text: string }> = [
    { side: "caller", text: "Hi — wind tore some shingles off my roof last night." },
    { side: "ai", text: "I&apos;m sorry to hear that. I can have someone out today. What&apos;s the address?" },
    { side: "caller", text: "412 Oak — Dallas, 75204." },
    { side: "ai", text: "Got it. I see a 4 PM slot with Marcus. Should I book that and text you the confirmation?" },
    { side: "caller", text: "Yes please." },
  ];
  return (
    <div className="bg-tile-2 rounded-[18px] p-5 sm:p-6 border border-white/5">
      <div className="flex items-center gap-2 text-[12px] text-white/50 mb-4">
        <span className="h-2 w-2 rounded-full bg-[#34c759] pulse-dot" />
        Live call · 00:42
      </div>
      <div className="space-y-2.5 text-[14px] leading-snug">
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              l.side === "ai"
                ? "ml-6 bg-action/95 text-white rounded-2xl rounded-tl-md px-3.5 py-2.5"
                : "mr-6 bg-white/[0.06] text-white/85 rounded-2xl rounded-tr-md px-3.5 py-2.5"
            }
            dangerouslySetInnerHTML={{ __html: l.text }}
          />
        ))}
      </div>
    </div>
  );
}

function CheckGlyph() {
  return (
    <span className="mt-1 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-action/10 text-action">
      <svg viewBox="0 0 20 20" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 10.5l4 4 8-9" />
      </svg>
    </span>
  );
}
