# Dekh Duniya Starter

A full-stack starter for your Bengali-first global book discovery platform.

## Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB with Mongoose
- Deployment targets: Vercel (frontend) + Render (backend)

## What is included
- Bengali-first landing page
- Genre-driven discovery flow
- Culture filter
- Book detail page
- Styled gradient / glassmorphism UI
- API endpoints with MongoDB support
- Fallback sample data when MongoDB is not connected yet

## Run locally

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Initial API endpoints
- `GET /api/health`
- `GET /api/books?culture=Russian&genres=Thriller,Philosophical`
- `GET /api/books/:id`

## Suggested next build steps
1. Add user language preferences and onboarding.
2. Add search by vague memory / prompt.
3. Replace sample book data with a real ingestion pipeline.
4. Add auth, saved lists, and reading progress after product validation.
5. Add licensing-safe external links before any in-app reading feature.
