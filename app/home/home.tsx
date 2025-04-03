import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'
import Photo from '../components/photo'
import { FaReact } from 'react-icons/fa'
import { RiFlutterFill } from 'react-icons/ri'
import { SiCodeforces } from 'react-icons/si'

function Home() {
  return (
    <div className='min-h-screen w-full  flex flex-col' id='home'>
      {/* Header section */}
      <div className='flex px-4 sm:px-10 md:px-20 pt-6 sm:pt-10 justify-center md:justify-end w-full items-center'>
        <Link href="./">
          <Image 
            src="/images/logo2.png" 
            alt="logo" 
            width={300} 
            height={81} 
            className='w-36 sm:w-52 md:w-72' 
          />
        </Link>
      </div>

      {/* Main content section */}
      <div className='flex flex-col sm:flex-row bg-transparent relative z-10 mx-3 sm:mx-5 lg:mx-20 my-6 sm:my-10 space-y-5 sm:space-y-0 justify-around items-center'>
        {/* Photo component with responsive sizing */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <Photo />
        </div>
        
        {/* Text content with responsive spacing and sizing */}
        <div className='text-center sm:text-left space-y-3 sm:space-y-5 w-full sm:w-auto sm:ml-6 md:ml-10'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-sans font-bold'>Hi 👋, I am</h1>
          <p className='font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-dancing-script'>
            Kamal Preet Singh
          </p>

          {/* Developer roles section - Responsive grid */}
          <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 text-sm sm:text-base md:text-xl text-primary p-2 sm:p-4 mt-4'>
            <div className='flex space-x-2 justify-center sm:justify-start items-center'>
              <FaReact className='text-lg sm:text-xl md:text-3xl text-white' />
              <p className='mt-0 sm:ml-2'>Web Developer</p>
            </div>
            <div className='flex space-x-2 justify-center sm:justify-start items-center'>
              <RiFlutterFill className='text-lg sm:text-xl md:text-3xl text-white' />
              <p className='mt-0 sm:ml-2'>App Developer</p>
            </div>
            <div className='flex space-x-2 justify-center sm:justify-start items-center col-span-1 xs:col-span-2 lg:col-span-1 mt-2 lg:mt-0'>
              <SiCodeforces className='text-lg sm:text-xl md:text-3xl text-white' />
              <p className='mt-0 sm:ml-2'>Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home