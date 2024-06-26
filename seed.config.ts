import "./envConfig.ts"
import { SeedPostgres } from "@snaplet/seed/adapter-postgres"
import { defineConfig } from "@snaplet/seed/config"
import postgres from "postgres"

export default defineConfig({
  adapter: () => {
    const client = postgres(process.env.DATABASE_URL_SESSION!)
    return new SeedPostgres(client)
  },
  select: [
    // We don't alter any extensions tables that might be owned by extensions
    "!*",
    "!*public.__drizzle_migrations",
    // We want to alter all the tables under public schema
    "public*",
    "public.posts_table",
    "public.users_table",
    "public.products",
  ],
})
