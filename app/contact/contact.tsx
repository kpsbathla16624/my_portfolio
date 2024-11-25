"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Social from "./social";
import { AiOutlineBarChart, AiOutlineProject } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";


const Contact = () => {
  const contactInfo = [
    {
      icon: <MdEmail />,
      link: "mailto:kamalpreet6198@gmail.com",
      value: "kamalpreet6198@gmail.com",
      label: "Email"
    },
    {
      icon: <BiPhone />,
      link: "tel:+916398565788",
      value: "+91-6398565788",
      label: "Phone"
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/kpsbathla16624",
      value: "kpsbathla16624",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/kpsbathla",
      value: "kpsbathla",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/kps.bathla",
      value: "kps.bathla",
      label: "Instagram"
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/kpsbathla",
      value: "kpsbathla",
      label: "Twitter"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-20" id="contact">
      <div className="w-full flex flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-share-tech-mono  mb-6">
          Contact Me
        </h1>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl ">
          Feel free to reach out to discuss projects, collaborations, or just to say hi! 
          I'm always excited to connect with fellow developers and tech enthusiasts.
        </p>

       <div className="w-full flex ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 ">
          {contactInfo.map((info, index) => (
            <Social
              key={index}
              icon={info.icon}
              link={info.link}
              value={info.value}
              label={info.label}
            />
          ))}
        </div>
        <div className="flex  flex-col items-center space-y-10 px-10 ">
       <a href="/projects">  <div className="hover:bg-opacity-60 rounded-full flex justify-center bg-primary w-60 py-5 text-lg items-center space-x-5 "> <AiOutlineProject className="text-2xl "/>  <h1>View Projects</h1></div></a>
       <a href="/stats">  <div className="hover:bg-opacity-60 rounded-full flex justify-center bg-primary w-60 py-5 text-lg text-center space-x-5"><AiOutlineBarChart className="text-2xl" /> <h1>View Stats</h1></div></a>
       <a href="/myresume">  <div className="hover:bg-opacity-60 rounded-full flex justify-center bg-primary w-60 py-5 text-lg text-center space-x-5"><BsFileEarmarkText className="text-2xl" /> <h1>View Resume</h1></div></a>

        </div>
       </div>
      </div>
    </div>
  );
};

export default Contact;
