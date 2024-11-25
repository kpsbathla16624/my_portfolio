"use client";
import { Card } from '@nextui-org/react';
import React from 'react'

interface SocialProps {
    icon: React.ReactNode;
    value: string;
    link: string;
    label?: string;
  }
const Social = ({ icon, link, value, label }: SocialProps) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Card className="p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center space-x-4">
            <div className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
            <div className="flex flex-col">
              {label && (
                <span className="text-gray-400 text-sm">{label}</span>
              )}
              <span className="text-white group-hover:text-primary transition-colors duration-300">
                {value}
              </span>
            </div>
          </div>
        </Card>
      </a>
    );
  };
  
  export default Social;
  
