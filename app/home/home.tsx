import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Photo from '../components/photo'
import { FaReact } from 'react-icons/fa'
import { RiFlutterFill } from 'react-icons/ri'
import { SiCodeforces } from 'react-icons/si'

function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col' id='home'>
      {/* Header section */}
      <div className='flex px-5 sm:px-10 md:px-20 pt-10 justify-center md:justify-end w-full items-center'>
        <Link href="./">
          <Image src="/images/logo2.png" alt="logo" width={300} height={81} className='w-40 sm:w-52 md:w-72' />
        </Link>
      </div>

      {/* Main content section */}
      <div className='flex flex-col sm:flex-row bg-transparent relative z-10 mx-5  lg:mx-20 my-10 space-y-5 sm:space-y-0 justify-center items-center sm:justify-around'>
        <Photo />
        <div className='text-center sm:text-left space-y-5 '>
          <h1 className='text-3xl sm:text-4xl md:text-4xl font-sans font-bold'>Hi 👋, I am</h1>
          <p className='font-serif font-bold text-4xl sm:text-5xl md:text-4xl lg:text-7xl xl:text-8xl font-dancing-script'>
            Kamal Preet Singh
          </p>

          {/* Developer roles section */}
          <div className='grid grid-cols-2 items-center  lg:grid-cols-3 gap-4 text-base sm:text-lg md:text-xl text-primary p-4'>
  <div className='flex space-x-2 justify-center items-center'>
    <FaReact className='text-xl sm:text-2xl md:text-3xl text-white' />
    <p className='mt-1 sm:mt-0 sm:ml-2'>Web Developer</p>
  </div>
  <div className='flex space-x-2 justify-center items-center'>
    <RiFlutterFill className='text-xl sm:text-2xl md:text-3xl text-white' />
    <p className='mt-1 sm:mt-0 sm:ml-2'>App Developer</p>
  </div>
  <div className='flex space-x-2 justify-center items-center'>
    <SiCodeforces className='text-xl sm:text-2xl md:text-3xl text-white' />
    <p className='mt-1 sm:mt-0 sm:ml-2'>Programmer</p>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Home
