"use client";
import React from "react";
import SkillComponent from "./skillComponent";
import { motion } from "framer-motion";
import Experience from "./experience";
import Education from "./Education";

function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", label: "React" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", label: "Next.js" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", label: "Tailwind" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", label: "HTML" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", label: "CSS" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png", label: "Redux" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { image: "/images/express.png", label: "Express" },
        { image: "/images/mongo.png", label: "MongoDB" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", label: "Node.js" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", label: "SQL" },
        { image: "/images/firebase.png", label: "Firebase" },
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", label: "Docker" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg", label: "Jenkins" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", label: "AWS" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", label: "Azure" },
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { image: "/images/flutter.png", label: "Flutter" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png", label: "Android" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png", label: "Dart" },
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", label: "JavaScript" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", label: "TypeScript" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", label: "C++" },
        { image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png", label: "Java" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", label: "Python" },
      ]
    },
    {
      category: "Tools & Version Control",
      skills: [
        { image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", label: "GitHub" },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-16" id="skills">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-share-tech-mono text-center mb-12">
        Skills & Experience
      </h1>
      
      {/* Skills Section */}
      <section className="mb-16">
        <motion.h2 
          className="text-2xl sm:text-3xl text-primary font-share-tech-mono  text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-3">
          {skillsData.map((category, index) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 bg-opacity-20  p-3 rounded-xl hover:bg-opacity-30 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-share-tech-mono text-primary mb-5 pl-2 border-l-4 border-primary">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <SkillComponent
                    key={skill.label}
                    image={skill.image}
                    label={skill.label}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Education and Experience Sections */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-800 bg-opacity-20 p-5 sm:p-6 rounded-xl hover:bg-opacity-30 transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl text-primary font-share-tech-mono mb-6 pl-2 border-l-4 border-primary">
            Education
          </h2>
          <Education />
        </motion.section>
        
        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-800 bg-opacity-20 p-5 sm:p-6 rounded-xl hover:bg-opacity-30 transition-all duration-300"
        >
          <h2 className="text-2xl sm:text-3xl text-primary font-share-tech-mono mb-6 pl-2 border-l-4 border-primary">
            Experience
          </h2>
          <Experience />
        </motion.section>
      </div>
    </div>
  );
}

export default Skills;