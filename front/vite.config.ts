import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
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
  
})
