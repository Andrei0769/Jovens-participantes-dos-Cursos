import React from 'react';
import CTAButton from './CTAButton';
import TypewriterText from './TypewriterText';
import DecorativeElements from './DecorativeElements';
import { InvitationProps } from '../types/invitation';

const InvitationContent: React.FC<InvitationProps> = ({ 
  title, 
  message, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <div className="relative w-full max-w-md md:max-w-lg">
      <DecorativeElements />
      
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="min-h-[4rem] flex justify-center items-center">
            <TypewriterText 
              text={title} 
              className="text-3xl md:text-4xl font-bold text-[#7DAEC5]"
            />
          </h1>
          <p className="mt-4 text-[#7DAEC5] text-lg md:text-xl animate-fade-up opacity-0" 
             style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            {message}
          </p>
        </div>
        
        <div className="mt-8 md:mt-10 flex justify-center animate-fade-up opacity-0" 
             style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          <CTAButton text={ctaText} link={ctaLink} />
        </div>
      </div>
    </div>
  );
};

export default InvitationContent;