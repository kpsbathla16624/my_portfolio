"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <div
      className="flex flex-col md:flex-row items-center  justify-between min-h-screen h-full px-2 sm:px-2 md:px-5 xl:px-10"
      id="about"
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-2/3 xl:p-20 md:p-10 p-5 text-justify"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary font-share-tech-mono">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-mono font-bold leading-relaxed">
          Hello! I'm{" "}
          <span className="text-primary font-bold">Kamal Preet Singh</span>, a third-year student at Chandigarh
          University with a passion for software development and creating impactful digital solutions. My journey in
          tech has led me to specialize as a Flutter developer, where I honed my skills and gained hands-on experience
          during a professional internship. This experience has allowed me to build efficient, cross-platform mobile
          applications and contribute effectively to team projects.
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl font-mono font-bold leading-relaxed">
          I'm also a full-stack developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack, capable
          of creating robust web applications from the ground up. Alongside this, I have expanded my skill set to
          include Next.js, enabling me to build fast, scalable web solutions and enhance user experiences.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex flex-wrap md:flex-col justify-center items-center gap-5 md:gap-20 w-full md:w-1/3 mt-5 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
      >
        <Image
          src="/images/1.svg"
          alt="about"
          width={150}
          height={150}
          className="w-24  md:mr-20 sm:w-32 md:w-36 lg:w-40"
        />
        <Image
          src="/images/2.jpg"
          alt="about"
          width={150}
          height={150}
          className="w-24 md:ml-20 sm:w-32 md:w-36 lg:w-40"
        />
      
      </motion.div>
    </div>
  );
}

export default About;
