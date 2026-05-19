import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-orange-500 pulse-dot" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-orange-500" />
          </span>
          <span className="font-semibold tracking-tight text-white">
            RoofVoice<span className="text-orange-500">.</span>AI
          </span>
        </Link>
        <a
          href="#book-call"
          className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-400 transition px-4 h-9 text-sm font-medium text-black"
        >
          Start Now
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
