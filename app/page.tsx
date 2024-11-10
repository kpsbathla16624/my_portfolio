import React from 'react'
import Photo from './components/photo'

function HomePage() {
  return (
    <div className='sm:flex-row flex flex-col relative z-10 mx-5 space-y-5 justify-center   items-center sm:justify-between lg:mx-2 xl:mx-10 my-10' >
      <Photo/>
      <div className=' space-y-5 '>
        <h1 className='text-3xl' >Hi!, I am </h1>
        
        <p className='font-serif font-bold text-3xl lg:text-6xl'>Kamal Preet Singh</p>
         </div>
    </div>
  )
}

export default HomePage
