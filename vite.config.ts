import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({server: {
  proxy: {
    "/api": {
      target: "http://localhost:8081/",
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
},
  plugins: [vue()],
})
