export function PainSolution() {
  const items = [
    {
      pain: "70% of inbound leads ghost you.",
      fix: "AI picks up in 1 ring — even at 2 AM during a hail storm.",
    },
    {
      pain: "Storm surge buries your front desk.",
      fix: "100+ parallel calls. No busy signal, no missed jobs.",
    },
    {
      pain: "Ad spend bleeds out on dead leads.",
      fix: "Every lead qualified, tagged, sequenced in your CRM.",
    },
    {
      pain: "Owner is the booking bottleneck.",
      fix: "Live appointments dropped on your calendar — zero owner time.",
    },
  ];

  return (
    <section className="bg-tile-1 text-white">
      <div className="mx-auto max-w-[1024px] px-5 py-20 sm:py-[80px]">
        <p className="eyebrow text-sky">The roofing operator&apos;s problem</p>
        <h2 className="headline-tile mt-3 text-white max-w-[720px]">
          You don&apos;t have a lead problem.{" "}
          <span className="text-white/50">You have a response-time problem.</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-white/10 rounded-[18px] overflow-hidden border border-white/10">
          {items.map((i) => (
            <div key={i.pain} className="bg-tile-1 p-7 sm:p-8">
              <p className="text-[19px] font-semibold leading-snug">{i.pain}</p>
              <p className="mt-2.5 text-[15px] text-[#cccccc] leading-relaxed">{i.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Submit the form.",
      copy: "Business name, monthly call volume, current CRM. Takes 30 seconds.",
    },
    {
      n: "02",
      title: "Free strategy call.",
      copy: "We map your choke points and demo a voice agent trained on your services.",
    },
    {
      n: "03",
      title: "Live in 48 hours.",
      copy: "Fully trained AI answering calls, booking jobs, syncing to your CRM.",
    },
  ];

  return (
    <section id="how" className="bg-canvas">
      <div className="mx-auto max-w-[1024px] px-5 py-20 sm:py-[80px]">
        <p className="eyebrow text-action">How it works</p>
        <h2 className="headline-tile mt-3 max-w-[720px]">
          From form to first booked job in 48 hours.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((s) => (
            <article
              key={s.n}
              className="rounded-[18px] border border-hairline bg-canvas p-7"
            >
              <span className="text-[13px] font-mono tracking-tight text-action">{s.n}</span>
              <h3 className="mt-5 text-[22px] font-semibold leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[15px] text-ink-80 leading-relaxed">
                {s.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  const cards = [
    {
      result: "+$90K",
      label: "storm-season revenue",
      quote:
        "We closed $12K from a single AI-handled call we would&apos;ve missed at 11 PM.",
      who: "Mike D. — Summit Roofing, TX",
    },
    {
      result: "52%",
      label: "close-rate lift",
      quote:
        "The AI books warmer leads than our $22/hr receptionists ever did. It just doesn&apos;t miss.",
      who: "Sarah V. — Apex Exteriors, ON",
    },
    {
      result: "0",
      label: "missed after-hours calls",
      quote:
        "Hail hit Tuesday night. Phone rang 47 times. AI booked 11 inspections before sunrise.",
      who: "James R. — Crown Roofworks, CO",
    },
  ];

  return (
    <section id="proof" className="bg-parchment">
      <div className="mx-auto max-w-[1024px] px-5 py-20 sm:py-[80px]">
        <p className="eyebrow text-action">What roofers say</p>
        <h2 className="headline-tile mt-3 max-w-[720px]">
          Real numbers. Real storm seasons.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-[18px] border border-hairline bg-canvas p-7 flex flex-col"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[44px] font-semibold tracking-tight leading-none text-action">
                  {c.result}
                </span>
              </div>
              <span className="mt-2 text-[13px] uppercase tracking-wider text-ink-48">
                {c.label}
              </span>
              <blockquote
                className="mt-6 text-[16px] text-ink-80 leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${c.quote}&rdquo;` }}
              />
              <p className="mt-6 text-[13px] text-ink-48 border-t border-divider pt-4">
                {c.who}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  const rows = [
    ["Picks up at 2 AM during a storm", false, true],
    ["Handles 100+ calls in parallel", false, true],
    ["Costs $22/hr+ with benefits", true, false],
    ["Calls in sick or takes vacation", true, false],
    ["Books straight to your CRM", "Sometimes", true],
    ["Speaks insurance &amp; claim language", "Maybe", true],
    ["Goes live in 48 hours", false, true],
  ] as const;

  return (
    <section className="bg-tile-3 text-white">
      <div className="mx-auto max-w-[1024px] px-5 py-20 sm:py-[80px]">
        <p className="eyebrow text-sky">The honest comparison</p>
        <h2 className="headline-tile mt-3 text-white max-w-[720px]">
          Human receptionist vs AI Voice Agent.
        </h2>

        <div className="mt-12 overflow-x-auto rounded-[18px] border border-white/10">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-white/[0.04] text-white/60">
                <th className="text-left font-medium px-6 py-4">Capability</th>
                <th className="text-center font-medium px-6 py-4">Human receptionist</th>
                <th className="text-center font-medium px-6 py-4 text-sky">RoofVoice AI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, human, ai], i) => (
                <tr key={i} className="border-t border-white/5">
                  <td
                    className="px-6 py-4 text-white/90"
                    dangerouslySetInnerHTML={{ __html: label as string }}
                  />
                  <td className="px-6 py-4 text-center">
                    <Cell value={human} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Cell value={ai} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Cell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "string") {
    return <span className="text-[13px] text-white/55 italic">{value}</span>;
  }
  if (value) {
    return (
      <span
        className={
          highlight
            ? "inline-flex h-7 w-7 items-center justify-center rounded-full bg-action text-white"
            : "inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/70"
        }
      >
        ✓
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] text-white/30">
      ×
    </span>
  );
}

export function FAQ() {
  const items = [
    {
      q: "How fast can my AI Voice Agent go live?",
      a: "48 hours from kickoff call. We train on your services, pricing tiers, service area, and CRM tags so the first booked job typically lands the same week.",
    },
    {
      q: "What if the AI doesn't know an answer?",
      a: "It transfers seamlessly to your team during business hours, or books a callback if after-hours. Every conversation is transcribed and tagged so you can refine the playbook.",
    },
    {
      q: "Does it work with my CRM?",
      a: "Native GoHighLevel, Jobber, ServiceTitan, JobNimbus, AccuLynx. Anything else, we ship a custom webhook integration in the first week.",
    },
    {
      q: "How much does it cost?",
      a: "Plans start at $297/month for solo operators and scale to $797/month for storm-chasers running multi-state operations. No annual contracts — cancel anytime in the first 30 days for a full refund.",
    },
    {
      q: "What about TCPA / SMS compliance?",
      a: "Every voice and SMS flow is built with explicit opt-in capture, STOP keyword handling, and DNC scrubbing. We&apos;ve handled audits for partners in TX, FL, and ON.",
    },
    {
      q: "Will my customers know they're talking to AI?",
      a: "We disclose &lsquo;virtual assistant&rsquo; on opening when required by state law. In every test market, qualified-lead rate goes UP, not down.",
    },
  ];

  return (
    <section id="faq" className="bg-canvas">
      <div className="mx-auto max-w-[760px] px-5 py-20 sm:py-[80px]">
        <p className="eyebrow text-action text-center">Frequently asked</p>
        <h2 className="headline-tile mt-3 text-center">
          The questions roofers always ask.
        </h2>
        <div className="mt-12 divide-y divide-divider rounded-[18px] border border-hairline bg-canvas">
          {items.map((it, i) => (
            <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="text-[17px] font-semibold text-ink">{it.q}</span>
                <span className="mt-1 shrink-0 text-action text-[22px] leading-none transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p
                className="mt-3 text-[15px] text-ink-80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: it.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-tile-1 text-white">
      <div className="mx-auto max-w-[1024px] px-5 py-24 sm:py-[100px] text-center">
        <h2 className="headline-hero text-white">
          The next storm doesn&apos;t wait.
        </h2>
        <p className="lead mt-5 text-[#cccccc] max-w-[640px] mx-auto">
          Lock your free 30-minute strategy call. Walk out with a deployment
          plan tailored to your service area.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#book-call"
            className="inline-flex items-center rounded-full bg-action text-white px-[22px] h-11 text-[17px] font-normal scale-press hover:bg-action-focus transition"
          >
            Book my strategy call
          </a>
          <a
            href="#how"
            className="inline-flex items-center rounded-full text-sky px-[22px] h-11 text-[17px] font-normal border border-sky/30 hover:bg-white/[0.04] transition scale-press"
          >
            Learn more &nbsp;›
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-parchment border-t border-hairline">
      <div className="mx-auto max-w-[1024px] px-5 py-12">
        <div className="grid sm:grid-cols-4 gap-8 text-[14px] leading-[2.2]">
          <div>
            <p className="text-[13px] font-semibold text-ink mb-3">Product</p>
            <ul className="text-ink-80">
              <li><a href="#how" className="hover:text-ink">How it works</a></li>
              <li><a href="#proof" className="hover:text-ink">Stories</a></li>
              <li><a href="#faq" className="hover:text-ink">Pricing</a></li>
              <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink mb-3">Company</p>
            <ul className="text-ink-80">
              <li><a href="#" className="hover:text-ink">About</a></li>
              <li><a href="#" className="hover:text-ink">Contact</a></li>
              <li><a href="#" className="hover:text-ink">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink mb-3">Legal</p>
            <ul className="text-ink-80">
              <li><a href="#" className="hover:text-ink">Privacy</a></li>
              <li><a href="#" className="hover:text-ink">Terms</a></li>
              <li><a href="#" className="hover:text-ink">Do Not Sell</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink mb-3">Support</p>
            <ul className="text-ink-80">
              <li><a href="mailto:hello@roofvoice.ai" className="hover:text-ink">hello@roofvoice.ai</a></li>
              <li><a href="#" className="hover:text-ink">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12px] text-ink-48">
          <p>© {new Date().getFullYear()} RoofVoice AI. Built for US &amp; Canada roofing contractors.</p>
          <p>More ways to reach us: <a href="#" className="text-action hover:underline">talk to sales</a> or <a href="#book-call" className="text-action hover:underline">book a call</a>.</p>
        </div>
      </div>
    </footer>
  );
}
