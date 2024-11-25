import React from 'react'
import Photo from './components/photo'
import About from './about/about'
import Link from 'next/link'
import Image from 'next/image'
import Home from './home/home'
import Skills from './skills/skills'
import Contact from './contact/contact'


function HomePage() {
  return (
   <> 
   <Home/>
    <About/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default HomePage
