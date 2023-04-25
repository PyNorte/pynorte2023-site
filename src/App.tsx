import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter basename="pynorte2023-site">
      <Router />
    </BrowserRouter>
  )
}
