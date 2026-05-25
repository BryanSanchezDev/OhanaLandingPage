import { defineConfig } from 'vite'

export default defineConfig({
  // Base path — change this if deploying to a subdirectory
  // For Azure Static Web Apps root deployment, '/' is correct
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
