import Image from 'next/image';
import React from 'react';

function Photo() {
  return (
    <div className=" relative w-44 sm:w-64 md:w-72 lg:w-[350px] flex justify-center items-center aspect-square">
      {/* Outer rotating div */}
      <div
        className="w-[110%] h-[110%] border-green-400 
                   aspect-square absolute rounded-full border-l-[3px] border-opacity-50  overflow-hidden
                   animate-spin-slow border-t-4 border-t-transparent " // Apply rotation animation here
      ></div>
       <div
        className="w-[110%] h-[110%] border-green-400 
                   aspect-square absolute rounded-full border-r-[3px] border-opacity-50   overflow-hidden
                   animate-spin-slow border-b-4 border-b-transparent" // Apply rotation animation here
      ></div>
      {/* Inner stationary div */}
      <div
        className="w-full h-full aspect-square absolute rounded-full border-2 border-white  overflow-hidden flex items-center justify-center"
      >
        <Image
          src="/images/profile.jpg"
          alt="Picture of the author"
          layout="intrinsic"
          width={512}
          height={512}
          className="rounded-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Photo;
