import React from 'react'
import Photo from './components/photo'
import About from './about/about'
import Link from 'next/link'
import Image from 'next/image'
import Home from './home/home'

function HomePage() {
  return (
   <> 
   <Home/>
    <About/>
    </>
  )
}

export default HomePage
