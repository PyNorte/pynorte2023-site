import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route Component={DefaultLayout} path="/">
        <Route Component={Landing} path="/" />
        <Route Component={NotFound} path="*" />
      </Route>
    </Routes>
  )
}
