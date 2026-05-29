import { Outlet } from 'react-router-dom'
import { SiteHeader } from './SiteHeader.jsx'
import { SiteFooter } from './SiteFooter.jsx'

export function MainLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
