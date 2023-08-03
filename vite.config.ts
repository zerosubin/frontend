import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from .env
dotenv.config()

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakao_map_api_key: process.env.VITE_KAKAO_MAP_KEY,
          }
        }
      }),
    ],
    define:{
      'process.env': process.env,
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://3.34.174.154:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    }
  }
});
