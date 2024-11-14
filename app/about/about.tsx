import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row  md:justify-between items-start min-h-screen h-full md:h-screen" id="about">
      <div className="w-full md:w-2/3 xl:p-20 md:p-10 p-5 text-justify">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="md:text-xl text-sm font-mono font-bold">
          Hello! I'm <span className="text-primary font-bold md:text-2xl">Kamal Preet Singh</span>, a third-year student at Chandigarh University with a passion for software development and creating impactful digital solutions. My journey in tech has led me to specialize as a Flutter developer, where I honed my skills and gained hands-on experience during a professional internship. This experience has allowed me to build efficient, cross-platform mobile applications and contribute effectively to team projects.
        </p>
        <br />
        <p className="md:text-xl font-mono font-bold">
          I'm also a full-stack developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack, capable of creating robust web applications from the ground up. Alongside this, I have expanded my skill set to include Next.js, enabling me to build fast, scalable web solutions and enhance user experiences.
        </p>
        <br />
        <p className="md:text-xl hidden md:block font-mono font-bold">
          Driven by a continuous desire to learn and a knack for problem-solving, I look forward to collaborating on innovative projects that push the boundaries of what's possible in software development.
        </p>
      </div>
      
      <div className="flex md:flex-col md:py-24 justify-around items-center md:h-full w-full md:w-1/3 mt-2 md:mt-0">
        <Image src="/images/1.svg" alt="about" width={300} height={300} className=" w-28 xl:w-40 lg:ml-32 md:ml-20" />
        <Image src="/images/2.jpg" alt="about" width={300} height={300} className=" w-28 xl:w-36 lg:mr-40 md:mr-24" />
        <Image src="/images/2.jpg" alt="about" width={300} height={300} className=" w-28 xl:w-36 lg:ml-40 md:ml-24" />
      </div>
      
    </div>
  );
}

export default About;
