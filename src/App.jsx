import './App.css';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Hero from './sections/hero/Hero';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';

function App() {

  return (
    <>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
