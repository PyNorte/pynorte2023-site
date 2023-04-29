import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'

export function App() {
  return (
    <BrowserRouter basename="pynorte2023-site">
      <Router />
    </BrowserRouter>
  )
}
