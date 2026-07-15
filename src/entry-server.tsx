import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { MarketingLanding } from './MarketingLanding'

// Entry de SSR usado solo en el build para pre-renderizar el HTML.
// renderToString produce el markup estático que se inyecta en
// dist/index.html (ver scripts/prerender.mjs). No toca el DOM.
export function render(): string {
  return renderToString(
    <StrictMode>
      <MarketingLanding />
    </StrictMode>,
  )
}
