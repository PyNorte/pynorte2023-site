import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Landing } from './pages/Landing'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<Landing />} path="/" />
      </Route>
    </Routes>
  )
}
