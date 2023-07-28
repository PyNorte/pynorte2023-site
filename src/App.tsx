import { HashRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    //Usando o HashRouter para gerenciar as rotas com "/"
    <HashRouter>
      <Router />
    </HashRouter>
  )
}
