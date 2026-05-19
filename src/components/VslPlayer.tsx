"use client";

import { useEffect, useRef, useState } from "react";

type Quartile = 25 | 50 | 75 | 100;

export function VslPlayer({
  videoId,
  leadHandle,
}: {
  videoId: string;
  leadHandle: string;
}) {
  const [started, setStarted] = useState(false);
  const sentRef = useRef<Set<Quartile | "play" | "page_view">>(new Set());
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  function emit(event: Quartile | "play" | "page_view") {
    if (sentRef.current.has(event)) return;
    sentRef.current.add(event);
    void fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: typeof event === "number" ? `vsl_${event}` : `vsl_${event}`,
        lead: leadHandle,
        at: new Date().toISOString(),
      }),
      keepalive: true,
    }).catch(() => {});
  }

  useEffect(() => {
    emit("page_view");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return;
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;

    const cmd = (func: string, args: unknown[] = []) =>
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*",
      );

    function onMessage(ev: MessageEvent) {
      if (typeof ev.data !== "string") return;
      try {
        const data = JSON.parse(ev.data);
        if (data.event === "infoDelivery" && data.info) {
          const { currentTime, duration, playerState } = data.info;
          if (playerState === 1) emit("play");
          if (typeof currentTime === "number" && typeof duration === "number" && duration > 0) {
            const pct = (currentTime / duration) * 100;
            if (pct >= 25) emit(25);
            if (pct >= 50) emit(50);
            if (pct >= 75) emit(75);
            if (pct >= 99.5) emit(100);
          }
        }
      } catch {}
    }

    window.addEventListener("message", onMessage);
    cmd("addEventListener", ["onStateChange"]);
    const poll = setInterval(() => cmd("getDuration"), 1000);
    return () => {
      window.removeEventListener("message", onMessage);
      clearInterval(poll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(249,115,22,0.25)]">
      {!started ? (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label="Play video"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video preview"
            className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-70 transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-black shadow-[0_0_60px_-5px_rgba(249,115,22,0.7)] group-hover:scale-105 transition">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current ml-1" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="mt-5 text-sm font-medium text-white/80">
              Watch the 5-minute walkthrough
            </span>
          </div>
        </button>
      ) : (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : ""}`}
          title="RoofVoice AI walkthrough"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
