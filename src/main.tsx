import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { MarketingLanding } from './MarketingLanding'
import './index.css'

// El HTML llega pre-renderizado (SSG en build) → hidratamos en vez de
// renderizar desde cero, para no descartar el markup que ya ve Google.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <MarketingLanding />
  </StrictMode>,
)
