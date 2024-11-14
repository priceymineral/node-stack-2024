# Backend Setup and Running Instructions

This guide will help you set up and run the backend for your project using Docker, PNPM, and other related tools.

## Prerequisites

Before running the commands below, make sure you have the following installed:

- **Docker**: To run the services in containers.
- **Node.js**: Make sure Node.js (and NPM) is installed on your machine.
- **PNPM**: A fast, disk space-efficient package manager (if not installed, run `npm install -g pnpm`).
- **Knex**: A SQL query builder for Node.js, usually installed via PNPM.

## Available Commands

### 1. **Build the Project**

To compile the source code using SWC (a fast TypeScript compiler):

```bash
pnpm build
```
