import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout.jsx'
import {
  HomePage,
  AboutPage,
  FinancialPlanningPage,
  InvestmentManagementPage,
  InsurancePage,
  ACPIPage,
  ContactPage,
  ServicesPage,
} from '../pages/index.js'

/**
 * Layout uses path="/" with child routes so the index and nested paths match
 * reliably (see react-router layout routes).
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route
          path="services/financial-planning"
          element={<FinancialPlanningPage />}
        />
        <Route
          path="services/investment-management"
          element={<InvestmentManagementPage />}
        />
        <Route path="services/insurance" element={<InsurancePage />} />
        <Route path="acpi" element={<ACPIPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
