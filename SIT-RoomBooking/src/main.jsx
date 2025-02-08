import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router"
import HelpPage from './pages/HelpPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PickingPage from './pages/PickingPage.jsx'
import History1Page from './pages/History1Page.jsx'
import ReportsPage from './pages/ReportsPage.jsx'
import Reports2Page from './pages/Reports2Page.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/picking" element={<PickingPage />} />
      <Route path="/history" element={<History1Page />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/reports2" element={<Reports2Page />} />
      <Route path="/help" element={<HelpPage />} />
      
    

      

    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
