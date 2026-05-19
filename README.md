# RoofVoice AI — Funnel Site (v1)

3-page marketing funnel for an AI Voice SaaS targeting US & Canada roofing
contractors. Built per `PRD_Roofing_AI_Voice_Funnel.md`.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4
- Edge route handler for tracking forwarder (`/api/track`)
- Funnel gating via `src/proxy.ts` (Next 16 proxy — formerly middleware)

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Hero + lead form + value props + proof + comparison + FAQ |
| `/book` | Calendly embed + sidebar (Step 2 of 3) |
| `/watch` | YouTube VSL with quartile tracking (Step 3 of 3) |

Direct hits to `/book` and `/watch` in production redirect to `/` unless they
carry the funnel parameters (`?lead_id`, `?invitee`, `?event`) or arrive from
a same-origin referrer.

## Local dev

```bash
cp .env.example .env.local
npm install
npm run dev
```

Visit http://localhost:3000.

## Environment variables

See `.env.example`. The form / Calendly / VSL fields are placeholders until
the client wires real GHL / Calendly / video IDs. `N8N_WEBHOOK_URL` is
optional — if unset, `/api/track` logs payloads in dev and returns
`{ forwarded: false }`.

## What's NOT in v1

- n8n workflow JSON exports
- Supabase migrations
- GA4 / Meta Pixel client snippets

These are intentional — backend automation is wired through n8n + Supabase
per the PRD. The frontend only forwards events to `N8N_WEBHOOK_URL`.
