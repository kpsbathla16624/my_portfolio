"use client";
import React from 'react'
import SkillComponent from './skillComponent'
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className=' min-h-screen' id='skills'>
      <h1 className='py-20 px-40 text-4xl text-primary font-share-tech-mono'> My Skills </h1>

      <div className= 'flex flex-col px-20 w-3/4 '>
     <motion.div
     className='flex  justify-between'
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{  amount: 0.2 }}>

      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' label='React' margintop={false} />
      <SkillComponent image='/images/express.png' label='Express' margintop={true} />
      <SkillComponent image='/images/mongo.png' label='MongoDB' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' label='Node.js' margintop={true} />
      <SkillComponent image='/images/flutter.png' label='Flutter' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' label='Next.js' margintop={true} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' label='SQL' margintop={false} />
     </motion.div>
     <motion.div 
       className='flex  justify-between'
       initial={{ opacity: 0, x: +150 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1 }}
       viewport={{  amount: 0.2 }}> 
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' label='C++' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' label='Redux' margintop={true} />
      <SkillComponent image='/images/firebase.png' label='Firebase' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' label='GitHub' margintop={true} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' label='Tailwind' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' label='TypeScript' margintop={true} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' label='CSS' margintop={false} />
       </motion.div>
       <motion.div 
       className='flex  justify-between'
       initial={{ opacity: 0, x: -150 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1 }}
       viewport={{  amount: 0.2 }}>

      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png' label='Dart' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' label='HTML' margintop={true} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png' label='Android' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' label='JavaScript' margintop={true} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' label='React' margintop={false} />
      <SkillComponent image='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' label='Python' margintop={true} />
      <SkillComponent image='/images/vercel.png' label='Vercel' margintop={false} />
       </motion.div>
      </div>
    </div>
  )
}

export default Skills
