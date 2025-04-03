"use client";
import { motion } from "framer-motion";
import Image from "next/legacy/image";

function About() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-0"
      id="about"
    >
      {/* Text Section */}
      <motion.div
        className="w-full md:w-3/5 lg:w-2/3 md:pr-6 lg:pr-10 xl:px-16 text-left sm:text-justify"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary font-share-tech-mono">
          About Me
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-mono font-bold leading-relaxed mb-4">
          Hello! I'm{" "}
          <span className="text-primary font-bold">Kamal Preet Singh</span>, a third-year student at Chandigarh
          University with a passion for software development and creating impactful digital solutions. My journey in
          tech has led me to specialize as a Flutter developer, where I honed my skills and gained hands-on experience
          during a professional internship. This experience has allowed me to build efficient, cross-platform mobile
          applications and contribute effectively to team projects.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-mono font-bold leading-relaxed">
          I'm also a full-stack developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack, capable
          of creating robust web applications from the ground up. Alongside this, I have expanded my skill set to
          include Next.js, enabling me to build fast, scalable web solutions and enhance user experiences.
        </p>
      </motion.div>

      {/* Image Section - Hidden on mobile, visible on md and larger screens */}
      <motion.div
        className="hidden md:flex md:flex-col justify-center items-center gap-16 lg:gap-20 w-2/5 lg:w-1/3"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2 }}
      >
        <div className="relative w-32 h-32 lg:w-40 lg:h-40">
          <Image
            src="/images/1.svg"
            alt="about"
            layout="fill"
            objectFit="contain"
            className="translate-x-4 lg:translate-x-8"
          />
        </div>
        <div className="relative w-32 h-32 lg:w-40 lg:h-40">
          <Image
            src="/images/2.jpg"
            alt="about"
            layout="fill"
            objectFit="contain"
            className="-translate-x-4 lg:-translate-x-8"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default About;