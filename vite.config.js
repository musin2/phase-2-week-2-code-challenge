import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/phase-2-week-2-code-challenge/",
  // server: {
  //   host: true,
  //   strictPort: true,
  //   port: 1000,
  // },
});
