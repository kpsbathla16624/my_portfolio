"use client";
import React from "react";
import SkillComponent from "./skillComponent";
import { motion } from "framer-motion";
import Experience from "./experience";
import Education from "./Education";

function Skills() {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center md:items-start justify-between px-5  lg:px-16"
      id="skills"
    >
      {/* Skills Section */}
      <div className="w-full lg:w-[70%]">

        <h1 className="py-10 lg:pl-16 text-3xl sm:text-4xl lg:text-5xl text-primary font-share-tech-mono text-center md:text-left">
          My Skills
        </h1>
        <div className="flex flex-col  space-y-10">
          {/* Row 1 */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 gap-5"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2 }}
          >
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              label="React"
            />
            <SkillComponent image="/images/express.png" label="Express" />
            <SkillComponent image="/images/mongo.png" label="MongoDB" />
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              label="Node.js"
            />
            <SkillComponent image="/images/flutter.png" label="Flutter" />
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              label="Next.js"
            />
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
              label="SQL"
            />
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              label="GitHub"
            />
         
           <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              label="Redux"
            />
            <SkillComponent image="/images/firebase.png" label="Firebase" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 gap-5"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2 }}
          >
           
            
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              label="Tailwind"
            />
              <SkillComponent
                image="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                label="HTML"
              /> 
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              label="CSS"
            />
             <SkillComponent
            image="https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png"
            label="Android"
          />
           <SkillComponent
            image="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
            label="C++"
          />
              <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
              label="Dart"
            />
          <SkillComponent
            image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            label="JavaScript"
          />
            <SkillComponent
              image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              label="TypeScript"
            />
          <SkillComponent
            image="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
            label="Java"
          />
          <SkillComponent
            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
            label="Python"
          />
          </motion.div>

          {/* Row 3
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 gap-5"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2 }}
          >
          
          
            <SkillComponent image="/images/vercel.png" label="Vercel" />
          </motion.div> */}
        </div>
      </div>

      {/* Education and Experience Section */}
      <div className="flex flex-col items-center lg:items-start space-y-10 w-full lg:w-[30%] mt-10 lg:mt-0">
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default Skills;
