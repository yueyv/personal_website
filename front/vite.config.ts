import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'url';
import { resolve } from 'path'
import { presetAttributify,presetIcons,presetUno} from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  unoCss({
    presets:[presetAttributify(),presetIcons(),presetUno()]
  }),
  AutoImport({
    imports:['vue'],
    dts:'src/auto-import.d.ts',
  }),
  ],
  server: {
    port: 3333,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        //  target: 'http://localhost:3000',
        target: 'http://114.132.50.228:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  },
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url)),
      '@images':resolve('./src/assets/img')
    }
  }
})
