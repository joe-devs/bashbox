# BashBox

BashBox is a Linux job-simulation lab platform.

The project is currently in an early local prototype stage.
The goal is to gradually evolve it into a real hands-on Linux administration training platform.

---

## Current Repository Structure

```text
bashbox/
├── apps/
│   ├── frontend/
│   └── backend/
├── archive/
│   └── bashbox-temp/
└── docs/
```

### Main Folders

| Path                   | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `apps/frontend`        | Main frontend application built with Next.js   |
| `apps/backend`         | Main backend API built with Fastify            |
| `archive/bashbox-temp` | Old frontend prototype, kept only as reference |
| `docs`                 | Project notes and documentation                |

---

## Current Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Fastify
* TypeScript
* WebSocket support
* Initial LXD-related service files

---

## Current Working Features

The current prototype supports:

* Frontend build
* Backend build
* Backend health check endpoint
* Mock lab start endpoint
* Lab page `/labs/404`
* Basic frontend-to-backend connection using mock data

---

## Not Implemented Yet

The following features are not implemented yet:

* Real user authentication
* Database
* Real LXD lab provisioning
* Real browser terminal connection
* Grader flow
* Julian feedback system
* User progress tracking
* Admin panel
* Production deployment

---

## Run the Backend

From the repository root:

```bash
cd apps/backend
npm install
cp .env.example .env
npm run dev
```

The backend should run on:

```text
http://localhost:4000
```

Test the backend health endpoint:

```bash
curl http://localhost:4000/api/health
```

Expected result:

```json
{"ok":true}
```

Test the mock lab start endpoint:

```bash
curl -X POST http://localhost:4000/api/labs/start \
  -H "Content-Type: application/json" \
  -d '{"user_id":"sysadmin_kai","lab_id":404}'
```

---

## Run the Frontend

Open a second terminal from the repository root:

```bash
cd apps/frontend
npm install
cp .env.local.example .env.local
npm run dev
```

The frontend usually runs on:

```text
http://localhost:3000
```

If port `3000` is busy, Next.js may use:

```text
http://localhost:3001
```

Open the lab page:

```text
http://localhost:3001/labs/404
```

---

## Environment Files

### Backend

Example file:

```text
apps/backend/.env.example
```

Current values:

```env
PORT=4000
NODE_ENV=development
```

### Frontend

Example file:

```text
apps/frontend/.env.local.example
```

Current values:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

---

## Current Mock Flow

The current lab flow is mock-only.

Flow:

```text
Frontend /labs/404
↓
POST /api/labs/start
↓
Backend returns mock lab session data
↓
Frontend displays the lab workspace
```

Real LXD provisioning will be added later.

---

## Development Notes

For now, development should focus only on stabilizing the local prototype.

Do not develop inside:

```text
archive/bashbox-temp
```

That folder is kept only as a reference.

---

## Next Planned Work

Next steps:

1. Clean local development setup.
2. Improve frontend/backend configuration.
3. Replace mock lab flow with real LXD provisioning.
4. Add real terminal connection.
5. Add Task 1: Basic Server Inspection.
6. Add grader flow.
7. Add Julian feedback.

