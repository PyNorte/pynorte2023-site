import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <main className="relative px-8 py-6 md:px-28 lg:px-40">
        <Outlet />
      </main>
    </div>
  )
}
