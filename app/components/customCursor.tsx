"use client";
import { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-48 h-48 rounded-full pointer-events-none  transform -translate-x-1/2 -translate-y-1/2 bg-transparent   border-white mix-blend-multiply overflow-hidden z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
      }}
    >
      {/* Magnifying effect overlay */}
      <div
        className="absolute inset-0 transform scale-150"
        style={{
          backgroundImage: 'inherit', // Use this to capture the content below if you can replicate CSS trickery in some scenarios.
          backgroundSize: 'cover',
        }}
      />
    </div>

  )}

  export default CustomCursor;