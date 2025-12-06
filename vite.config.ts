import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tripmate/', // <<< ОБЯЗАТЕЛЬНО! название репозитория в нижнем регистре
  plugins: [react()],
})

