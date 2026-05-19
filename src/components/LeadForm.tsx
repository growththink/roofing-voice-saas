"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function LeadForm({ compact = false }: { compact?: boolean }) {
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
      } catch {}
      const leadId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      router.push(`/book?lead_id=${leadId}`);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" id="book-call">
      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
        <Input name="full_name" placeholder="Full name" required />
        <Input name="business_name" placeholder="Business name" required />
      </div>
      <Input name="email" type="email" placeholder="Work email" required />
      <Input name="phone" type="tel" placeholder="Mobile number" required />
      <select
        name="monthly_volume"
        required
        defaultValue=""
        className="w-full h-11 rounded-full bg-canvas border border-hairline px-5 text-[15px] text-ink focus:outline-none focus:border-action focus:ring-2 focus:ring-action/30 transition"
      >
        <option value="" disabled>Monthly lead volume</option>
        <option value="<25">Under 25 / mo</option>
        <option value="25-100">25–100 / mo</option>
        <option value="100-500">100–500 / mo</option>
        <option value="500+">500+ / mo</option>
      </select>

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 rounded-full bg-action text-white text-[17px] font-normal scale-press hover:bg-action-focus disabled:opacity-60 transition"
      >
        {isPending ? "Reserving your slot…" : "Get my AI Voice Agent"}
      </button>

      <p className="text-[12px] text-ink-48 leading-snug pt-1">
        By submitting, you agree to receive SMS / email about your strategy
        call. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
      </p>

      {error && (
        <p className="text-[13px] text-action" role="alert">
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
      className="w-full h-11 rounded-full bg-canvas border border-hairline px-5 text-[15px] text-ink placeholder:text-ink-48 focus:outline-none focus:border-action focus:ring-2 focus:ring-action/30 transition"
    />
  );
}
