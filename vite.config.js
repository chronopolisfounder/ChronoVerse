import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: { port: 3000 },
    resolve: { alias: { '@': '/src' } },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __API_URL__: JSON.stringify(
        env.VITE_API_URL || 'https://api.chronoverse.com'
      ),
    },
  }
})
