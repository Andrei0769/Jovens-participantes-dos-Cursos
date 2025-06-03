import React from 'react';

interface CTAButtonProps {
  text: string;
  link: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      <span className="absolute inset-0 rounded-full bg-[#ADD8E6] opacity-70 blur-md animate-pulse"></span>
      
      <button 
        className="relative px-8 py-3 rounded-full bg-white text-[#7DAEC5] font-bold text-lg 
                  shadow-lg transition-all duration-300 transform hover:scale-105 
                  hover:shadow-[0_0_15px_rgba(173,216,230,0.8)] active:scale-95 active:shadow-inner"
      >
        {text}
      </button>
    </a>
  );
};

export default CTAButton;