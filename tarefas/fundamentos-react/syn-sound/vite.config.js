import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

//importar o plugin do tailwindcss
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], //adicionar o plugins do tailwindcss
})
