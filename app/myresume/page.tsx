import React from 'react';

function ResumePage() {
  return (
    <div className="relative z-10 w-full flex flex-col justify-center items-center">
      <h1 className="py-5 sm:py-10 text-2xl sm:text-3xl lg:text-5xl text-primary font-share-tech-mono text-center md:text-left">
          My Resume
        </h1>
      <iframe 
        src="/Resume-Kamal.pdf" 
        className="w-5/6 h-[100vh]" 
        title="Resume"
        
      ></iframe>
    </div>
  );
}

export default ResumePage;
