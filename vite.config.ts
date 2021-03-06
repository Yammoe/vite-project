import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-js',
      fs: require.resolve('rollup-plugin-node-builtins'),
    }
  },
  define: {
    "global": {},
  },
})
