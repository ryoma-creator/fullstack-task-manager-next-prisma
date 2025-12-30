This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup (Local)

### Prerequisites
- Node.js (LTS)
- Docker + Docker Compose
- MySQL (runs via Docker)
- Prisma

### Environment Variables
Create a `.env` file in the project root (do not commit it):

```env
MYSQL_ROOT_PASSWORD=your_password
MYSQL_DATABASE=taskmanager_db
DATABASE_URL="mysql://root:your_password@localhost:3306/taskmanager_db"
```

### Starting the Database
Start MySQL with Docker Compose:

```bash
docker-compose up -d
```

### Viewing the Database

#### Option 1: Prisma Studio (Recommended)
Prisma Studio provides a modern web interface to view and edit your database:

```bash
npm run db:studio
```

Then open [http://localhost:5555](http://localhost:5555) in your browser.

#### Option 2: phpMyAdmin
phpMyAdmin is included in Docker Compose. After starting the containers:

```bash
docker-compose up -d
```

Open [http://localhost:8080](http://localhost:8080) in your browser and login with:
- Server: `mysql`
- Username: `root`
- Password: (your `MYSQL_ROOT_PASSWORD` from `.env`)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
