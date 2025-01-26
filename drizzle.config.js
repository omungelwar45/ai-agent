import 'dotenv/config'; // Ensures environment variables are loaded
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle', // Directory for generated migration files
  schema: './db/schema.js', // Path to your schema file
  dialect: 'postgresql', // Using PostgreSQL
  dbCredentials: {
    url: process.env.DATABASE_URL || '', // Connection string from .env
    // If `DATABASE_URL` is not set, use individual fields as a fallback
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 5432, // Adjust the port if needed
    user: process.env.DB_USER || 'your-db-username',
    password: process.env.DB_PASSWORD || 'your-db-password',
    database: process.env.DB_NAME || 'your-database-name',
  },
});
