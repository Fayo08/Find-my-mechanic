import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// BASE_PATH is set by the GitHub Pages workflow (e.g. /Find-my-mechanic/)
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
