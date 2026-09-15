import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/landing1/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing1" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App