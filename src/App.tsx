import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    //Usando o BrowserRouter para gerenciar as rotas com "/"
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
