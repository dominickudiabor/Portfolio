import React from 'react'
import './App.scss'

import Header from './container/header-section'
import About from './container/about-section'
import Demos from './container/demo-section'
import TechStack from './container/tech-stack-section'
import Projects from './container/projects-section'
import ContactForm from './container/form-section'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Demos />
      <TechStack />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
