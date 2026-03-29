import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { CooperationPage } from './pages/CooperationPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'
import { HostAgreementPage } from './pages/HostAgreementPage'
import { CoinRechargePolicyPage } from './pages/CoinRechargePolicyPage'
import { ChildSafetyPolicyPage } from './pages/ChildSafetyPolicyPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
