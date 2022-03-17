import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true, //Auto Open new window
    proxy: { 
      '/api': {
       target: "http://www.coindeskkorea.com/rss/S1N8.xml",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  build:{
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      }
    }
  }
})
