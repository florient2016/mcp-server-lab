# mcp-server-lab

A Node.js web application built with Express.

## Getting started

```bash
npm install
npm run dev    # auto-restarts on file changes
# or
npm start
```

Open http://localhost:3000. Set `PORT` to use a different port.

## Structure

- `src/server.js` – Express server and API routes
- `public/` – static frontend (HTML, CSS, JS)

## API

- `GET /api/health` – health check
- `GET /api/hello?name=You` – sample JSON endpoint.
