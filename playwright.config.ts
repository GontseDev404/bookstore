import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
  },
}); 