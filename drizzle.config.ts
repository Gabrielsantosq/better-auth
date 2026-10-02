
import { env } from './apps/web/app/env';
console.log(env.DATABASE_URL)

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './apps/web/drizzle',
  schema: './apps/web/app/db/schema/**',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
