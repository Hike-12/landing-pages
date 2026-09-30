import React, { useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorBoundary from './components/Layout/ErrorBoundary'
import Loading from './components/Layout/Loading'
import PageWrapper from './components/Layout/PageWrapper'

const LandingPage = React.lazy(() => import('./pages/landing1/LandingPage'))
const LandingPage2 = React.lazy(() => import('./pages/landing2/LandingPage'))
const LandingPage3 = React.lazy(() => import('./pages/landing3/LandingPage'))
const LandingPage4 = React.lazy(() => import('./pages/landing4/LandingPage'))
const LandingPage5 = React.lazy(() => import('./pages/landing5/LandingPage'))
const LandingPage6 = React.lazy(() => import('./pages/landing6/LandingPage'))

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
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/landing1"
              element={
                <PageWrapper title="HEIRLOOM | Premium Leather Goods">
                  <LandingPage />
                </PageWrapper>
              }
            />
            <Route
              path="/landing2"
              element={
                <PageWrapper title="NEXUS">
                  <LandingPage2 />
                </PageWrapper>
              }
            />
            <Route
              path="/landing3"
              element={
                <PageWrapper title="FLUX">
                  <LandingPage3 />
                </PageWrapper>
              }
            />
            <Route
              path="/landing4"
              element={
                <PageWrapper title="ATELIER">
                  <LandingPage4 />
                </PageWrapper>
              }
            />
            <Route
              path="/landing5"
              element={
                <PageWrapper title="STUDIO NORTH">
                  <LandingPage5 />
                </PageWrapper>
              }
            />
            <Route
              path="/landing6"
              element={
                <PageWrapper title="PRISM">
                  <LandingPage6 />
                </PageWrapper>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
