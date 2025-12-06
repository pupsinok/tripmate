import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  base: '/tripmate/', // <<< ОБЯЗАТЕЛЬНО! название репозитория в нижнем регистре
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
})
