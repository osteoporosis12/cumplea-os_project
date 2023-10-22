import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Importar React Router sin el prefijo `react-router-dom`
      "react-router-dom": "react-router",
    },
  },
})
