import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'
import { LINKS } from '../../lib/constants/links.js'
import { ButtonLink } from '../ui/ButtonLink.jsx'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink
          to={ROUTES.home}
          className={({ isActive }) =>
            ['site-logo', isActive && 'active'].filter(Boolean).join(' ')
          }
          end
        >
          Stirling Financial
        </NavLink>

        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav-list">
            <li>
              <NavLink to={ROUTES.home} className="nav-pill" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.about} className="nav-pill">
                About
              </NavLink>
            </li>
            <li className="site-nav-services">
              <span className="site-nav-label">Services</span>
              <ul className="site-nav-submenu">
                <li>
                  <NavLink to={ROUTES.services.root}>Overview</NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.services.financialPlanning}>
                    Financial Planning
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.services.investmentManagement}>
                    Investment Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.services.insurance}>Insurance</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={ROUTES.acpi} className="nav-pill">
                ACPI
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.contact} className="nav-pill">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="site-header-actions">
          <a
            className="site-link-external"
            href={LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Login
          </a>
          <ButtonLink href={LINKS.calendlyNewClient}>Book a call</ButtonLink>
        </div>
      </div>
    </header>
  )
}
