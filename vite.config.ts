import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), Pages({
    dirs: 'src/views'
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
