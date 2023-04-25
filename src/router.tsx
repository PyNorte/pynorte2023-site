import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import { Landing } from './pages/Landing'

export function AppRouter() {
  return (
    <Routes>
      <Route Component={Landing} path="/" />
    </Routes>
  )
}
