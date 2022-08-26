import { Routes, Route } from 'react-router-dom'
// Pages
import ContactPage from './pages/ContactPage'

import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
