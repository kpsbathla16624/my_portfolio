"use client";   
import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { MdOutlinePersonOutline, MdWorkOutline } from 'react-icons/md';
import { AiOutlineProject, AiOutlineBarChart } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import Link from 'next/link';
import { GiSkills } from 'react-icons/gi';
import { BiBrain } from 'react-icons/bi';

function BottomNavbar() {
    // Set active tab according to current route
    const currentRoute = window.location.pathname;
    const [active, setActive] = useState(currentRoute);

    const handleButtonClick = (route: string) => {
        setActive(route);
    };

    const buttons = [
        { icon: <GoHome className='text-2xl' />, link: '/', label: 'Home' },  // Home
        { icon: <MdOutlinePersonOutline className='text-2xl' />, link: '/#about', label: 'About' },  // About
        { icon: <BiBrain   className='text-2xl' />, link: '/#skills', label: 'Skills' },  // Experience
        { icon: <AiOutlineProject className='text-2xl' />, link: '/projects', label: 'Projects' },  // Projects
        { icon: <AiOutlineBarChart className='text-2xl' />, link: '/stats', label: 'Stats' },  // Stats
        { icon: <BsFileEarmarkText className='text-2xl' />, link: '/myresume', label: 'Resume' },  // Resume
    ];
    
    return (
        <div className='z-50 fixed bottom-5 left-0 right-0 w-full flex justify-center items-center'>
            <div className='flex justify-center items-center space-x-3 bg-black border-2 border-white px-5 py-2 rounded-full'>
                {buttons.map((button, index) => (
                    <Link href={button.link} key={index}>
                        <div
                            key={index}
                            className={`relative rounded-full p-2 md:p-3 ${active === button.link ? 'bg-primary' : 'hover:bg-gray-800'} group`}
                            onClick={() => handleButtonClick(button.link)}
                        >
                            {button.icon}
                            {/* Centered Tooltip */}
                            <span className="absolute text-white bottom-full mb-4 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm  bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {button.label}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BottomNavbar
