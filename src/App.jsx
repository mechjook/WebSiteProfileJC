import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Impact from './components/Impact'
import GitHubEvidence from './components/GitHubEvidence'
import Methodology from './components/Methodology'
import Education from './components/Education'
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
          <Experience />
          <Stack />
          <Projects />
          <Impact />
          <GitHubEvidence />
          <Methodology />
          <Education />
          <Vision />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  )
}
