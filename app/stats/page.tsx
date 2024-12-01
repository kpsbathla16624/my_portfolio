import React from 'react';
import QuestionCountGraph from './QuestionBar';
import GitHubCalendar from "react-github-calendar";
import HeatMap from './heatmap';
import LeetcodeTags from './leetcodeTags';

function StatsPage() {
  return (
    <div id='stats' className='z-50 px-10 relative text-white'>
      <div className='h-20 w-full flex justify-center items-center my-5'>   <h1 className="py-10 lg:pl-16 text-3xl sm:text-4xl lg:text-5xl text-primary font-share-tech-mono text-center md:text-left">
      Coding statistics
        </h1></div>
      <div className='grid h-[150vh] grid-cols-10 gap-y-10 gap-x-4 grid-rows-10  '>
        <div className='col-span-3 row-span-3 items-center justify-center flex flex-col  '>
          <QuestionCountGraph />
        </div>
        <div className=' col-span-7 row-span-3  xl:col-span-5  items-center justify-center flex flex-col '>
          <LeetcodeTags/>
        </div>
        <div className='col-span-6 row-span-2 items-center justify-center flex flex-col  bg-transparent'>
          <HeatMap codechefId='kps_bathla' codeforcesId='kpsbathla' leetcodeId='kamalpreet6198' />
        </div>
        <div className='col-span-5  row-span-2  border border-white space-y-2 flex flex-col w-min h-min p-2 rounded-xl'>
          <h1 className='text-2xl'>Github Contributions</h1>
          <GitHubCalendar  username="kpsbathla16624" />
        </div>
       
      </div>
    </div>
  );
}

export default StatsPage;
