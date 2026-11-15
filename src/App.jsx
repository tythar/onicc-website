import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Projects from './pages/Projects'
import Partners from './pages/Partners'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

import './App.css'

function App() {
  return (
    <div className="website">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="section-padding text-center container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#102C48' }}>404 — Page Not Found</h1>
                <p style={{ color: '#536477', marginBottom: '2rem' }}>The requested resource does not exist on ONICC servers.</p>
                <a href="/" className="btn btn-primary">Return to Homepage</a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
