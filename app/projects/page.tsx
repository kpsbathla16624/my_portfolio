"use client";
import React from "react";
import ProjectComponent from "./projectComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ProjectsPage() {
  return (
    <div className="flex flex-col justify-start h-screen items-center">
      <h1 className="pt-5 sm:pt-10 text-2xl sm:text-3xl lg:text-4xl text-primary font-share-tech-mono text-center md:text-left">
        Projects
      </h1>
      <div className="pb-20 pt-10  px-10 h-full w-11/12 relative">
        {/* Custom Navigation Buttons */}
        <div className="custom-prev text-3xl absolute -left-10 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-500 hover:bg-opacity-15 text-white rounded-full p-5  cursor-pointer z-10">
          &lt; {/* Left Arrow */}
        </div>
        <div className="custom-next text-3xl absolute -right-10 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-500 hover:bg-opacity-15  text-white rounded-full p-5 cursor-pointer z-10">
          &gt; {/* Right Arrow */}
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <SwiperSlide>
            <ProjectComponent
              imagelink="/images/dsa.png"
              projectName="DSA HUB (DSA/CP tracker dashboard)"
              projectDescription="Developed a comprehensive CP/DSA dashboard using the MERN stack, integrating data from Codeforces, LeetCode, and CodeChef.
                         Consists of  interactive heatmap to track combined submission activity over time, enhancing data visibility.
                         
                         Leveraged RESTful APIs for seamless data retrieval, enabling real-time updates for user ratings and question history."
              techUsed={[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "RESTful APIs",
                "vercel",
              ]}
              githubLink="https://github.com/kpsbathla16624/dsa__tracker_dashboard"
              hostedLink="https://dsatrackerkps.vercel.app/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectComponent
              imagelink="/images/pppi.png"
              projectName="Industry Management Application"
              projectDescription={`Created an app to manage various data types, including import/export of raw materials, pending orders, completed orders, and employee information. Automated workflows for tracking and managing orders and inventory, improving operational efficiency and reducing manual errors.
                This one is specifically made for my father's industry (Parmarth Print Pack Industry), so all the graphs and data are tailored accordingly.`}
              techUsed={[
                "Flutter",
                "Dart",
                "Firebase",
                "Google Cloud Firestore",
              ]}
              githubLink="https://github.com/kpsbathla16624/PPPI"
              hostedLink="https://github.com/kpsbathla16624/PPPI"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectComponent
              imagelink="/images/ecom.png"
              projectName="E-commerce Backend"
              projectDescription="Developed a RESTful API for an e-commerce platform using Node.js and Express.js, 
              enabling seamless data retrieval and management. Integrated MongoDB for efficient data storage 
              and retrieval,ensuring data consistency and reliability. Implemented user authentication and 
              authorization using JWT tokens, enhancing data security and user privacy."
              techUsed={[
                "Node.js",
                "Express.js",
                "MongoDB",
                "RESTful APIs",
                "JWT",

              ]}
              githubLink="https://github.com/kpsbathla16624/e-commerce-Backend"
              hostedLink="https://github.com/kpsbathla16624/e-commerce-Backend"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectComponent
              imagelink="/images/resumeBuilder.png"
              projectName="Resume Builder"
              projectDescription="
              Developed a web application to create and download resumes using Next.js, enabling users to generate professional resumes with ease.
              Implemented a user-friendly interface for seamless resume creation, enhancing user experience.
              AI generated summary of the resume, making it easier for the user to get a quick overview of the resume."
              techUsed={[
                "Next.js",
                "React",
                "Tailwind CSS",
                "gemini api",
              ]}
             
              githubLink="https://github.com/kpsbathla16624/resume_builder_app"
              hostedLink="https://resumebuilderkps.vercel.app/"
            />
          </SwiperSlide>

          {/* Add more SwiperSlide components here for additional projects */}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectsPage;
