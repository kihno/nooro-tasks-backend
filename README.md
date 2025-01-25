This is a [Express Server](https://expressjs.com/) project built with [Prisma](https://www.prisma.io/) and [MySQL](https://www.mysql.com/).

## Getting Started

To run the development server, first initialize the project:

```bash
npm install
```

Then set the DATABASE_URL Environmential Variable to your MySQL database URL

Example:

```bash
DATABASE_URL="mysql://root:password@localhost:3300/tasks"
```

Next, use the PRISMA MIGRATE CLI command to map the data model to the database schema and seed the database:

```bash
npx prisma migrate dev --name init
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to verify that the server is running and the sample data was loaded.

Next, initialize the connected [Frontend](https://github.com/kihno/nooro-tasks-frontend).
