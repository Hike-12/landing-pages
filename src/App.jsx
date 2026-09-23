import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/landing1/LandingPage'
import LandingPage2 from './pages/landing2/LandingPage'
import LandingPage3 from './pages/landing3/LandingPage'
import LandingPage4 from './pages/landing4/LandingPage'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.theme

    if (stored === 'dark' || stored === 'light') {
      root.classList.toggle('dark', stored === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark')
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing1" element={<LandingPage />} />
        <Route path="/landing2" element={<LandingPage2 />} />
        <Route path="/landing3" element={<LandingPage3 />} />
        <Route path="/landing4" element={<LandingPage4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App