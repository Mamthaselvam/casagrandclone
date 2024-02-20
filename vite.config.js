import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_KEY": JSON.stringify(
      // eslint-disable-next-line no-undef
      process.env.VITE_KEY
    ),
  },
})
