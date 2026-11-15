import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // On GitHub Pages the site lives at /onicc-website/. While developing it stays at "/".
  base: command === 'build' ? '/onicc-website/' : '/',
}))


