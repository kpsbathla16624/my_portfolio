import Image from "next/legacy/image";
import React from 'react';

function Education() {
  return (
    <div className="px-5  items-start">
       <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-y-8 gap-x-10 text-white">
        {/* School */}
        <div className="flex items-center space-x-5 ">
          <a href="https://dpsrudrapur.com/" target='_blank'>
          <Image
            src="/images/school.jpeg"
            alt="DPS"
            className="rounded-lg object-contain"
            width={60}
            height={60}
          />
          </a>
          <div>
            <h1 className="text-lg font-bold font-serif">DPS Rdurapur</h1>
            <h1 className="text-base">CBSE class 12</h1>
            <h1 className="text-sm text-gray-300">2021-2022</h1>
          </div>
        </div>
        {/* University */}
        <div className="flex items-center space-x-5">
         <a href="https://www.cuchd.in/" target='_blank'>
         <Image
            src="https://pbs.twimg.com/profile_images/1771029800305479680/1yYgcd7o_400x400.jpg"
            alt="CU"
            className="rounded-lg object-contain"
            width={60}
            height={60}
          />
         </a>
          <div>
            <h1 className="text-lg font-bold font-serif">Chandigarh University</h1>
            <h1 className="text-base">B.E CSE</h1>
            <h1 className="text-sm text-gray-300">2022-2026</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
