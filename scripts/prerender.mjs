// Pre-render (SSG): tras `vite build` (cliente) y `vite build --ssr`,
// renderiza la app a string e inyecta el markup en dist/index.html
// (reemplaza el placeholder <!--app-html--> dentro de #root).
// Resultado: Google recibe el HTML con TODO el contenido, sin ejecutar JS.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distIndex = path.join(root, 'dist', 'index.html')
const serverEntry = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href

const template = fs.readFileSync(distIndex, 'utf-8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('prerender: no se encontró el placeholder <!--app-html--> en dist/index.html')
}

const { render } = await import(serverEntry)
const appHtml = render()

fs.writeFileSync(distIndex, template.replace('<!--app-html-->', () => appHtml))
console.log(`✓ pre-render OK: ${appHtml.length} chars inyectados en dist/index.html`)
