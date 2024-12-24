import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base:'gulimei',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  server:{
    host: '0.0.0.0', // 允许局域网 IP 访问
    port: 5173,      // 可指定端口号
    open: true       // 启动时自动打开浏览器
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
