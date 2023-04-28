import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Landing } from './pages/Landing'

export function Router() {
  return (
    <Routes>
      <Route Component={DefaultLayout} path="/">
        <Route Component={Landing} path="/" />
      </Route>
    </Routes>
  )
}
