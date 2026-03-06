import React from 'react'
import Hero from './Hero';
import Project from './Project';
import Skills from './Skills';
import Experience from './Experience';
import ContactAndFooter from './ContactAndFooter';
function Home() {
  return (  
    <>
      <Hero />
      <Project />
      <Skills />
      <Experience />
      <ContactAndFooter />  
    </>
  )
}

export default Home