# BashBox 🚀

**Version:** v1.0.0-alpha (Frontend Architecture)

## Overview
BashBox is a premium SaaS platform dedicated to Linux System Administration, DevOps training, and RHCSA 10 exam preparation. It provides an immersive, cyberpunk-inspired environment focused on practical, bare-metal server parity.

## Architecture & Tech Stack
* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript / React
* **Styling:** Tailwind CSS (Custom Theme: Deep Void Black `#0d1117` & Neon Green `#39FF14`)
* **Icons:** Lucide-React
* **Routing Strategy:** Next.js Route Groups (`(main)` for the authenticated dashboard, `(public)` for marketing and auth pages) to prevent layout bleeding.

## Current Milestone (v1.0.0-alpha)
This release finalizes the UI/UX visual parity and frontend routing structure.
* [x] **Public Interface:** Landing Page, Subscriptions (Pricing), Syllabus, and Authentication UI (Login/Register).
* [x] **Learner Dashboard:** Learning Telemetry, System Stats, and Lab tracking interface.
* [x] **Interactive Labs:** Terminal gateway mockup with objective tracking and system telemetry.
* [x] **UI/UX Aesthetics:** Implementation of the Global Scanline Overlay, custom scrollbars, and terminal-inspired design.

## Upcoming Roadmap (Backend & DevOps)
1. **Security:** Implement Authentication (NextAuth.js / JWT) and Route Middleware.
2. **Terminal Gateway:** Build a Python FastAPI WebSocket Bridge for live SSH access.
3. **Infrastructure:** Provision isolated RHEL 9 Docker containers / VMware instances for active lab environments.
4. **Database:** Integrate Prisma ORM with PostgreSQL to track user study hours and Cookbook progress.