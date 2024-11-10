
import React from 'react';

function ResumePage() {
  return (
    <div className="relative z-10 w-full flex flex-col justify-center items-center">
      <h1 className="m-10 text-4xl">My Resume</h1>
      <object data="/resume/resumekps.pdf" type="application/pdf" className="w-5/6 h-[100vh]" title="Resume">
  <p>Your browser does not support PDFs. <a href="/resume/resumekps.pdf">Download the PDF</a>.</p>
</object>

    </div>
  );
}

export default ResumePage;
