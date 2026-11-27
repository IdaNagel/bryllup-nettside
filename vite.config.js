import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Hvis du vil klargjøre for GitHub Pages senere, 
  // kan vi sette: base: '/bryllup-nettside/' (eller '/' om du har eget domene)
  base: '/',
})