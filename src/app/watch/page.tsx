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
      <header className="bg-black text-white">
        <div className="mx-auto max-w-[1024px] h-11 px-5 flex items-center justify-between text-[12px]">
          <Link href="/" className="flex items-center gap-1.5 text-white/85 hover:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            RoofVoice
          </Link>
          <span className="text-white/60">Step 3 of 3</span>
        </div>
      </header>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[820px] px-5 pt-16 pb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-action/[0.06] text-action px-4 py-1.5 text-[13px] font-medium">
            <span>You&apos;re booked</span>
            <span className="text-ink-48">·</span>
            <span className="text-ink-80">Watch this before our call</span>
          </div>
          <h1 className="headline-hero mt-6">
            5 minutes that will change<br className="hidden sm:block" /> your storm season.
          </h1>
          <p className="lead mt-5 text-ink-80 max-w-[600px] mx-auto">
            A short walkthrough so you walk into our call already knowing how
            the deployment works — and we can focus on <em>your</em> playbook.
          </p>
        </div>
      </section>

      <section className="bg-parchment">
        <div className="mx-auto max-w-[920px] px-5 pt-2 pb-16">
          <VslPlayer videoId={videoId} leadHandle={leadHandle} />

          <div className="mt-10 rounded-[18px] border border-hairline bg-canvas p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
              <div>
                <p className="eyebrow text-action">Don&apos;t forget</p>
                <h2 className="text-[22px] font-semibold mt-2 tracking-tight">
                  Add the call to your calendar.
                </h2>
                <p className="mt-1 text-[15px] text-ink-80">
                  Confirmation email is in your inbox. We&apos;ll text a
                  reminder 1 hour before.
                </p>
              </div>
              <a
                href="/"
                className="inline-flex items-center rounded-full bg-action text-white px-[22px] h-11 text-[17px] font-normal scale-press hover:bg-action-focus transition self-start sm:self-auto"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-parchment border-t border-hairline py-8 text-center text-[12px] text-ink-48">
        © {new Date().getFullYear()} RoofVoice AI · Step 3 of 3
      </footer>
    </>
  );
}
