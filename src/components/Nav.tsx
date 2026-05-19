import Link from "next/link";

export function Nav() {
  const links = [
    { label: "Overview", href: "/" },
    { label: "How it works", href: "#how" },
    { label: "Proof", href: "#proof" },
    { label: "Pricing", href: "#faq" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50 bg-black text-white">
        <div className="mx-auto max-w-[1024px] h-11 px-5 flex items-center justify-between text-[12px] tracking-[-0.01em] text-white/90">
          <Link href="/" className="flex items-center gap-1.5 opacity-90 hover:opacity-100">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            <span className="font-medium">RoofVoice</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-white/75">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#book-call"
              className="rounded-[8px] bg-white text-black px-3 py-1.5 text-[12px] font-medium scale-press hover:bg-white/90 transition"
            >
              Start
            </a>
          </div>
        </div>
      </div>
      <div className="sticky top-11 z-40 bg-parchment/80 backdrop-blur-xl backdrop-saturate-150 border-b border-hairline/60">
        <div className="mx-auto max-w-[1024px] h-[52px] px-5 flex items-center justify-between">
          <span className="tagline text-ink">RoofVoice AI</span>
          <div className="flex items-center gap-6 text-[14px] text-ink-80">
            <a href="#how" className="hidden sm:inline hover:text-ink transition-colors">
              How it works
            </a>
            <a href="#proof" className="hidden sm:inline hover:text-ink transition-colors">
              Stories
            </a>
            <a
              href="#book-call"
              className="inline-flex items-center rounded-full bg-action text-white px-[18px] py-[7px] text-[14px] font-normal scale-press hover:bg-action-focus transition"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
