import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), Pages({
    dirs: 'src/views'
  }), Layouts(), Unocss({
    presets: [
      presetIcons({
        extraProperties: {
          display: 'inline-block'
        }
      })
    ]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
