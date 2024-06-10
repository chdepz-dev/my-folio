import React from 'react'
import "./css/Home.css"
import Hero from '../Components/Hero/Hero'
import About from './About'
import Education from '../Components/Education/Education'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'


const Home = () => {
  return (
    <>

     <Hero />
     <About />
      <Education />
   <Skills />
    <Projects />
     </>
  )
}

export default Home