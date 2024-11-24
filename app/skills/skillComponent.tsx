import Image from 'next/image';
import React from 'react';

interface SkillProps {
    image: string;
    label: string;
  
}

function SkillComponent({ image, label }: SkillProps) {
    return (
        <div  className= {`  " skill  flex  flex-col justify-center items-center  space-y-2 "`}>
            <div className="bg-gray-300  rounded-3xl w-14 h-14 flex items-center justify-center overflow-hidden">
                {/* Add `layout="intrinsic"` to handle sizing automatically */}
                <Image 
                    src={image} 
                    alt={label} 
                    width={100} 
                    height={100} 
                    className="rounded-full object-contain"
                />
            </div>
            <p className="text-sm">{label}</p>
        </div>
    );
}

export default SkillComponent;
