import React from 'react'

function GithubStats() {
  return (
    <div className='w-full h-auto p-2 flex flex-col   border border-white   rounded-xl'>
        <h1 className='font-bold text-2xl'>📊 GitHub Stats</h1>
       <div className=' w-full h-full  flex justify-center items-center '>
         <div className='w-full h-full pr-3'>
          <iframe className='w-full h-full '  src="https://github-readme-stats.vercel.app/api/top-langs/?username=kpsbathla16624&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" title="GitHub"></iframe>
        </div>
        <div className='w-full h-full pl-2'>
          
          <iframe className='w-full h-full  '   src="https://github-readme-streak-stats.herokuapp.com/?user=kpsbathla16624&theme=dark&hide_border=false" width={500} height={500} title="GitHub"></iframe>
        </div>
       </div>
       
    </div>
  )
}

export default GithubStats
