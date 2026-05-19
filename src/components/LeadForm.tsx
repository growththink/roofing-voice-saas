"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function LeadForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    startTransition(async () => {
      try {
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event: "form_submit", payload }),
        });
      } catch {
        // tracking failure is non-blocking for UX; backend will retry via GHL
      }
      const leadId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      router.push(`/book?lead_id=${leadId}`);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" id="book-call">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input name="full_name" placeholder="Full name" required />
        <Input name="business_name" placeholder="Business name" required />
      </div>
      <Input name="email" type="email" placeholder="Work email" required />
      <Input name="phone" type="tel" placeholder="Mobile number" required />
      <select
        name="monthly_volume"
        required
        defaultValue=""
        className="w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60"
      >
        <option value="" disabled className="bg-zinc-900">
          Monthly lead volume
        </option>
        <option value="<25" className="bg-zinc-900">Under 25 / mo</option>
        <option value="25-100" className="bg-zinc-900">25–100 / mo</option>
        <option value="100-500" className="bg-zinc-900">100–500 / mo</option>
        <option value="500+" className="bg-zinc-900">500+ / mo</option>
      </select>

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-60 transition font-semibold text-black"
      >
        {isPending ? "Reserving your slot…" : "Get my AI Voice Agent →"}
      </button>

      <p className="text-[11px] text-white/40 leading-relaxed">
        By submitting, you agree to receive SMS / email about your strategy
        call. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
      </p>

      {error && (
        <p className="text-xs text-orange-400" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-11 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60"
    />
  );
}
