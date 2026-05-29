# BashBox Backend (MVP)

Node.js + Fastify + LXD Orchestrator.

## Prerequisites
- Linux Host (Ubuntu/Rocky) with LXD installed and initialized (`lxd init`).
- Node.js 20+
- Build tools (for `node-pty`): `sudo apt install make g++` or `dnf groupinstall "Development Tools"`.

## LXD Verification
Ensure the current user is in the `lxd` group:
```bash
groups | grep lxd
lxc list
```

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## API Endpoints
- `POST /api/labs/start` { "labId": "...", "mode": "guided" }
- `WS /api/term/:sessionId/:nodeId` (Send keystrokes or `{"type":"resize","cols":100,"rows":30}`)
- `POST /api/labs/submit` { "sessionId": "..." }
- `POST /api/labs/reset` { "sessionId": "..." }