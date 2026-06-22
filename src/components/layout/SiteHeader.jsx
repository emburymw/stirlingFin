import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'
import { LINKS } from '../../lib/constants/links.js'
import { ButtonLink } from '../ui/ButtonLink.jsx'

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const suppressServicesOpen = useRef(false)
  const location = useLocation()

  useEffect(() => {
    setServicesOpen(false)
    suppressServicesOpen.current = false
  }, [location.pathname])

  const openServicesMenu = () => {
    if (!suppressServicesOpen.current) {
      setServicesOpen(true)
    }
  }

  const closeServicesMenu = () => {
    setServicesOpen(false)
    suppressServicesOpen.current = true
  }

  const handleServicesMouseLeave = () => {
    setServicesOpen(false)
    suppressServicesOpen.current = false
  }

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
            <li
              className={[
                'site-nav-services',
                servicesOpen && 'is-open',
              ]
                .filter(Boolean)
                .join(' ')}
              onMouseEnter={openServicesMenu}
              onMouseLeave={handleServicesMouseLeave}
            >
              <span className="site-nav-label">Services</span>
              <ul className="site-nav-submenu">
                <li>
                  <NavLink
                    to={ROUTES.services.financialPlanning}
                    onClick={closeServicesMenu}
                  >
                    Financial Planning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={ROUTES.services.investmentManagement}
                    onClick={closeServicesMenu}
                  >
                    Investment Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={ROUTES.services.insurance}
                    onClick={closeServicesMenu}
                  >
                    Insurance
                  </NavLink>
                </li>
              </ul>
            </li>            <li>
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
