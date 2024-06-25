import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Changing Port Number from 5173 to 3000
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    }
  }
})
