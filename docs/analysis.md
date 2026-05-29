# BashBox Repository Analysis

## Current Structure

bashbox/
- apps/frontend
- apps/backend
- archive/bashbox-temp
- docs

## Frontend

Path:
apps/frontend

Stack:
- Next.js
- React
- TypeScript
- Tailwind CSS

Current status:
- Frontend build passes.
- Main pages exist.
- Lab page /labs/404 works with backend mock endpoint.
- It is still a prototype.
- It is not connected yet to real auth, database, LXD, grader, or user progress.

## Backend

Path:
apps/backend

Stack:
- Node.js
- Fastify
- TypeScript
- WebSocket support
- Initial LXD service files

Current status:
- Backend build passes.
- /api/health works.
- /api/labs/start mock endpoint works.
- Real LXD flow is not active yet.
- Auth, database, grader, and progress are not implemented yet.

## Archive

Path:
archive/bashbox-temp

Status:
- Old frontend prototype.
- Kept only as reference.
- We should not develop directly inside this folder.

## Phase 0 Completed Work

Completed:
- Flattened backend structure.
- Fixed backend build.
- Added missing dotenv dependency.
- Fixed frontend TypeScript build errors.
- Verified frontend build.
- Verified backend health endpoint.
- Connected lab page to backend mock start endpoint.

## Next Phase

Phase 1 - Stabilize local prototype.

Goals:
1. Add clear root README run instructions.
2. Add backend .env.example.
3. Add frontend environment variable for backend API URL.
4. Remove hardcoded backend URL from frontend.
5. Verify frontend and backend run together cleanly.
6. Push cleanup branch to GitHub.
