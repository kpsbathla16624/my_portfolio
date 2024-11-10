import Image from 'next/image'
import React from 'react'

function Photo() {
  return (
    <div className="w-44 sm:w-64 md:w-72  lg:w-80 
                    m-2 aspect-square  relative z-10  rounded-full border-2 border-white border-opacity-30 overflow-hidden">
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        layout="intrinsic"
        
        width={512}  
        height={512} 
        className="rounded-full "
        objectFit="cover" 
      />
    </div>
  )
}

export default Photo
