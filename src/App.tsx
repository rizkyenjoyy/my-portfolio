import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseFiles from './pages/CaseFiles'
import CaseDetail from './pages/CaseDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function MainLayout() {
  const { pathname } = useLocation()
  const isCasePage = pathname.startsWith('/case/')

  return (
    <div className="bg-[#FAF7EE] text-[#121212] min-h-screen flex flex-col font-sans selection:bg-[#FACC15] selection:text-[#121212]">
      {!isCasePage && <Navigation />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-files" element={<CaseFiles />} />
          <Route path="/case/:slug" element={<CaseDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
    </Router>
  )
}

export default App

