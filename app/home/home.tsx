import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Photo from '../components/photo'

function Home() {
  return (
    <div className='h-screen w-full'>
      <div className='flex px-20 pt-10 justify-center md:justify-end w-full items-center'>
   <Link href="./">
          <Image src="/images/logo2.png" alt="logo" width={300} height={81} />
          </Link>
   </div>
    <div className='sm:flex-row bg-transparent flex flex-col relative z-10 mx-5 space-y-5 justify-center   items-center sm:justify-around space-x-10 lg:mx-10 xl:mx-20 my-20' >
      <Photo/>
      <div className=' space-y-5 '>
        <h1 className='text-5xl font-sans font-bold' >Hi 👋, I am </h1>
        
        <p className='font-serif font-bold text-4xl md:text-6xl  font-dancing-script  lg:text-8xl'>Kamal Preet Singh</p>
         </div>
    </div>
    </div>
  )
}

export default Home
