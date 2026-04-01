import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './App.css'

const ContactPage = lazy(() =>
  import('./pages/ContactPage.jsx').then((m) => ({ default: m.ContactPage })),
)
const CooperationPage = lazy(() =>
  import('./pages/CooperationPage.jsx').then((m) => ({ default: m.CooperationPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage.jsx').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const TermsOfServicePage = lazy(() =>
  import('./pages/TermsOfServicePage.jsx').then((m) => ({ default: m.TermsOfServicePage })),
)
const HostAgreementPage = lazy(() =>
  import('./pages/HostAgreementPage.jsx').then((m) => ({ default: m.HostAgreementPage })),
)
const CoinRechargePolicyPage = lazy(() =>
  import('./pages/CoinRechargePolicyPage.jsx').then((m) => ({ default: m.CoinRechargePolicyPage })),
)
const ChildSafetyPolicyPage = lazy(() =>
  import('./pages/ChildSafetyPolicyPage.jsx').then((m) => ({ default: m.ChildSafetyPolicyPage })),
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/host-agreement" element={<HostAgreementPage />} />
          <Route path="/recharge-agreement" element={<CoinRechargePolicyPage />} />
          <Route path="/child-safety-policy" element={<ChildSafetyPolicyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
