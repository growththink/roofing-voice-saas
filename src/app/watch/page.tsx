import Link from "next/link";
import { VslPlayer } from "@/components/VslPlayer";

export const metadata = {
  title: "You're booked — watch this before our call",
  robots: { index: false, follow: false },
};

export default async function WatchPage({
  searchParams,
}: {
  searchParams: Promise<{ invitee?: string; event?: string }>;
}) {
  const params = await searchParams;
  const leadHandle = params.invitee ?? params.event ?? "guest";
  const videoId = process.env.NEXT_PUBLIC_VSL_YOUTUBE_ID ?? "dQw4w9WgXcQ";

  return (
    <>
      <header className="border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500 pulse-dot" />
            <span className="font-semibold tracking-tight text-white">
              RoofVoice<span className="text-orange-500">.</span>AI
            </span>
          </Link>
          <span className="text-[11px] uppercase tracking-[0.18em] text-orange-400">
            Step 3 of 3
          </span>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pt-12 pb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-300">
            <span className="text-base leading-none">🎉</span>
            You&apos;re booked — watch this before our call
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            5 minutes that will{" "}
            <span className="text-orange-500">change your storm season.</span>
          </h1>
          <p className="mt-4 text-white/55 max-w-xl mx-auto">
            Watch this short walkthrough before our strategy call. You&apos;ll
            walk in already knowing how the deployment works — so we can focus
            on <em>your</em> playbook.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-16">
          <VslPlayer videoId={videoId} leadHandle={leadHandle} />

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-orange-400">
                  Don&apos;t forget
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Add the call to your calendar
                </h2>
                <p className="mt-1 text-sm text-white/55">
                  Confirmation email is in your inbox. We&apos;ll text a
                  reminder 1 hour before.
                </p>
              </div>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition px-5 h-11 text-sm font-medium text-white"
              >
                Back to home
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} RoofVoice AI · Step 3 of 3
      </footer>
    </>
  );
}
