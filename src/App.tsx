import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseFiles from './pages/CaseFiles'
import CaseDetail from './pages/CaseDetail'

function App() {
  return (
    <Router>
      <div className="bg-background text-text-primary min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-files" element={<CaseFiles />} />
            <Route path="/case/:slug" element={<CaseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
