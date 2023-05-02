import { Outlet } from 'react-router-dom'

import { Footer } from '../components/Footer'

export function DefaultLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}
