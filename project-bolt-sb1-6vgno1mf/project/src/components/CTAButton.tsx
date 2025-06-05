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
      className="relative inline-block group"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7DAEC5] to-[#ADD8E6] opacity-70 blur-lg group-hover:blur-xl transition-all duration-300"></span>
      
      <button 
        className="relative px-10 py-4 rounded-full bg-white text-[#7DAEC5] font-bold text-lg 
                  shadow-xl backdrop-blur-sm border border-white/20
                  transition-all duration-300 transform 
                  hover:scale-105 hover:text-[#5C8DA4]
                  hover:shadow-[0_0_25px_rgba(173,216,230,0.8)]
                  active:scale-95 active:shadow-inner
                  group-hover:bg-opacity-90"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {text}
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </button>
    </a>
  );
};

export default CTAButton;