import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from "@million/lint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 2804,
    host: 'localhost',
  },

  plugins: [react(), MillionLint.vite()],
})
