import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/lib', dest: '' },
        { src: 'src/index.d.ts', dest: '' }  
      ] 
    })
  ],
  server: {
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/index.ts' 
      },
      output:{
        entryFileNames: 'index.js'
      }
    }
  }
})
