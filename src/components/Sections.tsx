export function PainSolution() {
  const items = [
    {
      icon: "📵",
      pain: "70% of inbound leads ghost you",
      fix: "AI picks up in 1 ring — even at 2 AM during a hail storm.",
    },
    {
      icon: "🌩️",
      pain: "Storm surge buries your front desk",
      fix: "100+ parallel calls handled, no busy signal, no missed jobs.",
    },
    {
      icon: "💸",
      pain: "Ad spend bleeds out on dead leads",
      fix: "Every lead qualified, tagged, and follow-up sequenced in your CRM.",
    },
    {
      icon: "📅",
      pain: "Owner is the bottleneck for bookings",
      fix: "Live appointments dropped on your calendar — zero owner time.",
    },
  ];

  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>The roofing operator&apos;s problem</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-2xl">
          You don&apos;t have a lead problem.
          <span className="text-white/40"> You have a response-time problem.</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i.pain}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/40 hover:bg-orange-500/[0.03] transition"
            >
              <div className="text-2xl">{i.icon}</div>
              <p className="mt-3 text-white font-medium">{i.pain}</p>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">
                {i.fix}
              </p>
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
      title: "Submit the form",
      copy: "Tell us your business name, monthly call volume, and what CRM you use. 30 seconds.",
    },
    {
      n: "02",
      title: "Free strategy call",
      copy: "We map your storm-season choke points and demo a voice agent trained on your exact services.",
    },
    {
      n: "03",
      title: "Live in 48 hours",
      copy: "Fully trained AI Voice Agent answering calls, booking jobs, and syncing to your CRM — set and forget.",
    },
  ];

  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-2xl">
          From form to first booked job in 48 hours.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-xl border border-white/10 bg-zinc-950/60 p-6"
            >
              <div className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-black font-semibold text-sm">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">
                {s.copy}
              </p>
            </div>
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
      label: "in storm-season revenue",
      quote:
        "We literally closed $12K from a single AI-handled call we would&apos;ve missed at 11 PM.",
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
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>What roofers say</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-2xl">
          Real numbers. Real storm seasons.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 flex flex-col"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-orange-400 tracking-tight">
                  {c.result}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {c.label}
                </span>
              </div>
              <blockquote
                className="mt-6 text-sm text-white/75 leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${c.quote}&rdquo;` }}
              />
              <p className="mt-6 text-xs text-white/45 border-t border-white/5 pt-4">
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
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>The honest comparison</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white max-w-2xl">
          Human receptionist vs AI Voice Agent.
        </h2>

        <div className="mt-12 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.04] text-white/55">
                <th className="text-left font-medium px-6 py-4">Capability</th>
                <th className="text-center font-medium px-6 py-4">
                  Human receptionist
                </th>
                <th className="text-center font-medium px-6 py-4 text-orange-400">
                  RoofVoice AI
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, human, ai], i) => (
                <tr
                  key={i}
                  className="border-t border-white/5 hover:bg-white/[0.015]"
                >
                  <td
                    className="px-6 py-4 text-white/85"
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

function Cell({
  value,
  highlight,
}: {
  value: boolean | string;
  highlight?: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span className="text-xs text-white/55 italic">{value}</span>
    );
  }
  if (value) {
    return (
      <span
        className={
          highlight
            ? "inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-black"
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
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6">
        <SectionLabel className="text-center block">FAQ</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center">
          The questions roofers always ask.
        </h2>
        <div className="mt-12 divide-y divide-white/5 rounded-xl border border-white/10 bg-white/[0.02]">
          {items.map((it, i) => (
            <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="text-white font-medium">{it.q}</span>
                <span className="mt-1 shrink-0 text-orange-400 transition group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p
                className="mt-3 text-sm text-white/55 leading-relaxed"
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
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
          The next storm doesn&apos;t wait.{" "}
          <span className="text-orange-500">Neither should you.</span>
        </h2>
        <p className="mt-5 text-white/55 max-w-xl mx-auto">
          Lock your free 30-minute strategy call. Walk out with a deployment
          plan tailored to your service area &mdash; whether the storm hits
          next Tuesday or next quarter.
        </p>
        <a
          href="#book-call"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-400 px-6 h-12 font-semibold text-black transition"
        >
          Book my strategy call →
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
        <p>
          © {new Date().getFullYear()} RoofVoice AI. AI Voice Agents for
          roofing contractors across US &amp; Canada.
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white/70">Privacy</a>
          <a href="#" className="hover:text-white/70">Terms</a>
          <a href="#" className="hover:text-white/70">Do Not Sell My Info</a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-xs uppercase tracking-[0.22em] text-orange-400/90 ${className}`}
    >
      {children}
    </span>
  );
}
