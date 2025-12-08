import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
