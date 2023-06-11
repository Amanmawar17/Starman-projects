import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://amanmawar17.github.io/frontend-mentor/',
  plugins: [react()],
})
