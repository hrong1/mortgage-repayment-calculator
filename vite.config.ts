import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 自动在每个 scss 文件顶部加上这一行
        additionalData: `@use "@/styles/variables" as *;\n`
      }
    }
  },
  base: '/mortgage-repayment-calculator',
})
