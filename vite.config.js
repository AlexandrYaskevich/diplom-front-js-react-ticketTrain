import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/diplom-front-js-react-ticketTrain/',
  plugins: [react()],
})
