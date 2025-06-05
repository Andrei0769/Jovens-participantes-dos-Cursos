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
      
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 
                    border border-white/50 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="text-center mb-10">
          <div className="inline-block mb-6 p-2 rounded-full bg-[#ADD8E6]/20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7DAEC5] to-[#ADD8E6] 
                          flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
          </div>
          
          <h1 className="min-h-[4rem] flex justify-center items-center">
            <TypewriterText 
              text={title} 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7DAEC5] to-[#ADD8E6] 
                         bg-clip-text text-transparent"
              speed={80}
            />
          </h1>
          
          <p className="mt-6 text-[#7DAEC5] text-lg md:text-xl animate-fade-up opacity-0
                      leading-relaxed" 
             style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            {message}
          </p>
        </div>
        
        <div className="mt-10 flex justify-center animate-fade-up opacity-0" 
             style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          <CTAButton text={ctaText} link={ctaLink} />
        </div>
      </div>
    </div>
  );
};

export default InvitationContent;