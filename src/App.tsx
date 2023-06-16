import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : 'https://2023.pythonnorte.org/'}
    >
      <Router />
    </BrowserRouter>
  )
}
