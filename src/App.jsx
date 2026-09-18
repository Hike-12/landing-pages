import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/landing1/LandingPage'
import LandingPage2 from './pages/landing2/LandingPage'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App