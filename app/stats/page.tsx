import React from 'react'
import QuestionCountGraph from './QuestionBar';

import GitHubCalendar from "react-github-calendar";




function StatsPage() {
  return (
    <div id='stats' className='z-50 px-10 relative  text-white'  >
     
      <QuestionCountGraph/>
     
         <div className='border border-white space-y-2 flex flex-col w-min p-2 rounded-3xl'>
         <h1 className='text-2xl'>Github Contibutions</h1>

      <GitHubCalendar username="kpsbathla16624"  />
         </div>
   
    
    </div>
  )
}

export default StatsPage
