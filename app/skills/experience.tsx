import Image from "next/legacy/image"
import React from 'react'

function Experience() {
  return (
    <div className='px-5 items-start'>
        <h1 className='py-10 text-4xl text-primary font-share-tech-mono'> My Experience</h1> 
        <ul className='list-disc text-white '>
            <li className='flex flex-col '> 
                <div className='flex items-center space-x-4  '> 
                   <a href="https://medochealth.in/" target='_blank'> <Image src='/images/medoc.png' alt='medoc'  className="rounded-lg h-min bg-white object-contain" width={50} height={50} /></a>
                    <div className='flex flex-col '>
                    <h1 className='text-lg font-bold font-serif'>Medoc Health IT Pvt. Ltd</h1>
                    <h1>Frontend Developer </h1>
                    <h1 className='text-sm'>July 2024 - Present </h1>

                    </div>
                </div>
                 </li>
        </ul>
    </div>
  )
}

export default Experience
