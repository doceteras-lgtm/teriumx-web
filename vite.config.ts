import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

// Canon ARCHITECTURE §3.14: versión visible en UI por deploy (señal de
// que el deploy aterrizó). Commit: Vercel env → git local → 'local'.
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))
const commit = (
  process.env.VERCEL_GIT_COMMIT_SHA ??
  (() => { try { return execSync('git rev-parse HEAD').toString() } catch { return 'local' } })()
).slice(0, 7)

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_COMMIT__: JSON.stringify(commit),
    __BUILT_AT__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5175,
    strictPort: true,
  },
})
