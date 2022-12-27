import Bot from "./components/header/Bot";
import Header from "./components/header/Header"
import Hero from './components/header/Hero';
import About from './components/main/About';
import Contact from "./components/main/Contact";
import Projects from "./components/main/Projects";
import Skills from './components/main/Skills';

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Bot/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
