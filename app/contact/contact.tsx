"use client";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineProject } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { ReactNode } from "react";

// Define types for our components
interface ContactInfo {
  icon: ReactNode;
  link: string;
  value: string;
  label: string;
}

interface QuickLink {
  icon: ReactNode;
  text: string;
  href: string;
}

interface SocialLinkProps {
  icon: ReactNode;
  link: string;
  value: string;
  label: string;
}

const Contact = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <MdEmail className="text-2xl" />,
      link: "mailto:kamalpreet6198@gmail.com",
      value: "kamalpreet6198@gmail.com",
      label: "Email"
    },
    {
      icon: <BiPhone className="text-2xl" />,
      link: "tel:+916398565788",
      value: "+91-6398565788",
      label: "Phone"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/kpsbathla16624",
      value: "kpsbathla16624",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://linkedin.com/in/kpsbathla",
      value: "kpsbathla",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      link: "https://instagram.com/kps.bathla",
      value: "kps.bathla",
      label: "Instagram"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      link: "https://x.com/kpsbathla",
      value: "kpsbathla",
      label: "Twitter"
    }
  ];

  const quickLinks: QuickLink[] = [
    {
      icon: <AiOutlineProject className="text-xl" />,
      text: "Projects",
      href: "/projects"
    },
    {
      icon: <AiOutlineBarChart className="text-xl" />,
      text: "Stats",
      href: "/stats"
    },
    {
      icon: <BsFileEarmarkText className="text-xl" />,
      text: "Resume",
      href: "/myresume"
    }
  ];
  
  // Simpler social link component using basic HTML
  const SocialLink = ({ icon, link, value, label }: SocialLinkProps) => (
    <a 
      href={link} 
      className="flex items-center gap-4 p-4 transition-all duration-300 rounded-lg hover:bg-gray-800 group cursor-pointer"
      onClick={(e) => {
        // If it's an email or phone link, we don't prevent default
        if (link.startsWith("mailto:") || link.startsWith("tel:")) {
          return; // Let the browser handle it normally
        }
        
        // If it's an external link, open in new tab
        if (link.startsWith("http")) {
          e.preventDefault();
          window.location.href = link;
        }
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 p-3 rounded-full bg-gray-800 group-hover:bg-primary text-primary group-hover:text-black">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-white truncate">{value}</span>
      </div>
    </a>
  );

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-transparent" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-2">Get in Touch</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to discuss projects, collaborations, or just to say hi! 
            I'm always excited to connect with fellow developers and tech enthusiasts.
          </p>
        </div>
        
        {/* Quick Links Bar - Using standard HTML links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {quickLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="flex items-center gap-2 bg-gray-800 hover:bg-primary text-white hover:text-black px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = link.href;
              }}
            >
              {link.icon}
              <span>{link.text}</span>
            </a>
          ))}
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactInfo.map((info, index) => (
            <SocialLink
              key={index}
              icon={info.icon}
              link={info.link}
              value={info.value}
              label={info.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;