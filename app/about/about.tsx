"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-between items-start min-h-screen h-full "
      id="about"
    >
      <motion.div
        className="w-full md:w-2/3 xl:p-20 md:p-10 p-5 text-justify"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{  amount: 0.2 }} // Trigger when 50% of the element is visible
      >
        <h1 className="text-5xl font-bold mb-4 text-primary font-share-tech-mono">About Me</h1>
        <p className="md:text-2xl text-lg font-mono font-bold">
          Hello! I'm{" "}
          <span className="text-primary font-bold md:text-2xl">Kamal Preet Singh</span>, a third-year student at
          Chandigarh University with a passion for software development and creating impactful digital solutions. My
          journey in tech has led me to specialize as a Flutter developer, where I honed my skills and gained
          hands-on experience during a professional internship. This experience has allowed me to build efficient,
          cross-platform mobile applications and contribute effectively to team projects.
        </p>
        <br />
        <p className="md:text-2xl text-lg font-mono font-bold">
          I'm also a full-stack developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack,
          capable of creating robust web applications from the ground up. Alongside this, I have expanded my skill
          set to include Next.js, enabling me to build fast, scalable web solutions and enhance user experiences.
        </p>
      </motion.div>

      <motion.div
        className="flex md:flex-col md:py-24 justify-around items-center md:h-screen w-full md:w-1/3 mt-2 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{  amount: 0.2 }} // Trigger when 50% of the element is visible
      >
        <Image
          src="/images/1.svg"
          alt="about"
          width={300}
          height={300}
          className="hidden sm:block w-28 xl:w-40 lg:ml-32 md:ml-20"
        />
        <Image
          src="/images/2.jpg"
          alt="about"
          width={300}
          height={300}
          className="w-28 xl:w-36 lg:mr-40 md:mr-24"
        />
        <Image
          src="/images/3.png"
          alt="about"
          width={300}
          height={300}
          className="w-28 xl:w-36 lg:ml-40 md:ml-24"
        />
      </motion.div>
    </div>
  );
}

export default About;
