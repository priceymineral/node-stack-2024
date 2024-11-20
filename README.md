# Backend Setup and Running Instructions

This guide will help you set up and run the backend for your project using Docker, PNPM, and other related tools.

## Prerequisites

Before running the commands below, make sure you have the following installed:

- **Docker**: To run the services in containers.
- **Node.js**: Make sure Node.js (and NPM) is installed on your machine.
- **PNPM**: A fast, disk space-efficient package manager (if not installed, run `npm install -g pnpm`).
- **Knex**: A SQL query builder for Node.js, usually installed via PNPM.
- **Prisma**: Object-Relational Mappers (ORMs) for working with databases in Node.js

## Available Commands

### 1. **Build the Project**

To compile the source code using SWC (a fast TypeScript compiler):

```bash
pnpm build
```

This command will:

Remove the existing dist folder (if any) using rimraf.
Compile the ./src folder into the dist folder.

### 2. Start the Backend

To start the backend server (after building the project):

```bash
pnpm start
```

This will execute the compiled code from the dist folder by running the entry point dist/src/index.js.

### 3. Seed the Database (Development Environment)

If you need to seed the database with sample data for local development:

```bash
pnpm seed:dev
```

This command runs a TypeScript script (scripts/seed/dev.ts) inside a Docker container running the backend service.

### 4. Access the PostgreSQL Database Console

To open a PostgreSQL console for manual queries:

```bash
pnpm db:console
```

This command runs psql inside a Docker container to connect to the PostgreSQL database running in the postgres container, using the database name webapp_dev.

### 5. Start Backend with Docker (Debugging)

To start the backend inside Docker with debugging enabled:

```bash
pnpm start:docker
```

This will:

Build the project with pnpm build.
Run the server with node --inspect=0.0.0.0 dist/src/index.js, allowing debugging from an external debugger (e.g., VS Code). 6. Run Database Migrations
To apply the latest database migrations:

```bash
pnpm db:migrate
```

This command uses knex to run the migrations on your database.

### 7. Run Database Migrations in Docker

To apply the latest migrations inside Docker:

```bash
pnpm docker:db:migrate
```

This will run the migrations inside the backend container.

### 8. Undo the Last Database Migration

If you need to roll back the last migration:

```bash
pnpm docker:db:migrate:undo
```

This command undoes the last migration inside the backend Docker container.

### 9. Rebuild the Backend (Docker)

If you need to rebuild the Docker backend service and restart it:

```bash
pnpm rebuild:be
```

This will:

Rebuild the backend Docker image.
Forcefully stop and remove the backend container.
Start the backend service in detached mode.
