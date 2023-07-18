import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path'

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
    lib: {
      entry: path.resolve(__dirname, 'src/index.d.ts'),
      name: 'MyReactHooks',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 这样 'react' 和 'react-dom' 将不会被打包进你的库
      external: ['react', 'react-dom'],
      output: {
        // 提供全局变量 React = 'react'
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    }
  }
})
