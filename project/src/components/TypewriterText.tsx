import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '',
  delay = 500,
  speed = 100
}) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timer: number;
    
    // Initial delay before starting the typewriter effect
    const startDelay = setTimeout(() => {
      let i = 0;
      
      // Set up interval to add one character at a time
      timer = window.setInterval(() => {
        setDisplayText(text.substring(0, i + 1));
        i++;
        
        if (i === text.length) {
          clearInterval(timer);
        }
      }, speed);
    }, delay);
    
    return () => {
      clearTimeout(startDelay);
      clearInterval(timer);
    };
  }, [text, delay, speed]);
  
  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;