import React from 'react';
import QuestionCountGraph from './QuestionBar';
import GitHubCalendar from "react-github-calendar";
import HeatMap from './heatmap';

function StatsPage() {
  return (
    <div id='stats' className='z-50 px-10 relative text-white'>
      <div className='grid grid-cols-10 gap-4 '>
        <div className='col-span-3'>
          <QuestionCountGraph />
        </div>
        <div className='col-span-3'></div>
        <div className='col-span-6  bg-transparent'>
          <HeatMap codechefId='kps_bathla' codeforcesId='kpsbathla' leetcodeId='kamalpreet6198' />
        </div>
        <div className='col-span-5 border border-white space-y-2 flex flex-col w-min p-2 rounded-xl'>
          <h1 className='text-2xl'>Github Contributions</h1>
          <GitHubCalendar username="kpsbathla16624" />
        </div>
        <div className=' h-96 col-span-8'>hello</div>
      </div>
    </div>
  );
}

export default StatsPage;
