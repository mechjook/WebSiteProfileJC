import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ValueProposition from './components/ValueProposition'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Strengths from './components/Strengths'
import Projects from './components/Projects'
import Methodology from './components/Methodology'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-navy-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ValueProposition />
          <Experience />
          <Stack />
          <Strengths />
          <Projects />
          <Methodology />
          <Vision />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}
