# Fullstack Task Manager (Learning Project)

## Overview

This is a full-stack learning project built with **Next.js (App Router)**,
**Prisma**, and **MySQL**.

The goal of this project is not just to build a Todo app,
but to understand how **server-side APIs**, **database access**, and
**client-side UI** work together step by step.

The project is intentionally developed **from the backend first**,
verifying APIs before building UI.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma
- MySQL (Docker)
- REST-style API (Route Handlers)

### Architecture Flow

Where TypeScript Exists (and Where It Doesn’t)

┌──────────────┐
│ schema.prisma│   ← You write this
└──────┬───────┘
       │  prisma generate
       ▼
┌────────────────────────┐
│ Prisma Client (TS)      │  ← Auto-generated (don't edit)
│ ・Task type            │
│ ・findMany(): Task[]   │
└──────┬─────────────────┘
       │
       ▼
┌──────────────────┐
│ Server (Route)    │  ← Write TS or optional
│ prisma.task.findMany()
└──────┬───────────┘
       │ JSON
       ▼
┌──────────────────┐
│ Frontend         │  ← TS required (boundary)
└──────────────────┘
       │
       ▼
┌──────────────────┐
│ DB (MySQL)       │  ← No TS
└──────────────────┘


### Type Safety Boundaries

TypeScript exists only at compile time and is erased at runtime.
When data crosses the network boundary (Server → Frontend),
it is serialized as JSON, so type information is lost.

Type safety must be re-established on the client side
(e.g. with shared types, validation, or tools like Zod / tRPC).

---

## Current Progress

### Implemented

- MySQL database setup using Docker
- Prisma schema design and migrations
- Prisma Client integration
- Task model with status enum (`TODO`, `IN_PROGRESS`, `DONE`)
- API endpoints:
  - `GET /api/tasks`
  - `POST /api/tasks`
- API testing without UI (browser / curl)

### In Progress / Next Steps

- Accept request body in POST `/api/tasks`
- Build minimal UI to display tasks
- Form handling and validation
- State management

---

## Setup (Local)

### Prerequisites

- Node.js (LTS)
- Docker + Docker Compose

### Environment Variables

Create a `.env` file in the project root (do not commit it):

```env
MYSQL_ROOT_PASSWORD=your_password
MYSQL_DATABASE=taskmanager_db
DATABASE_URL="mysql://root:your_password@localhost:3306/taskmanager_db"
