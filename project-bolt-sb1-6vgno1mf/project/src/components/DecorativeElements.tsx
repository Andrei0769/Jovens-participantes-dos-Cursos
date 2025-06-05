import React from 'react';

const DecorativeElements: React.FC = () => {
  // Create array of decorative elements with different properties
  const elements = [
    { size: 'w-4 h-4', position: '-top-8 -left-8', delay: '0s', duration: '15s' },
    { size: 'w-6 h-6', position: 'top-12 -right-10', delay: '2s', duration: '20s' },
    { size: 'w-5 h-5', position: '-bottom-10 left-20', delay: '1s', duration: '18s' },
    { size: 'w-3 h-3', position: '-bottom-6 right-16', delay: '3s', duration: '12s' },
    { size: 'w-8 h-8', position: '-top-16 left-1/3', delay: '0.5s', duration: '25s' },
    { size: 'w-5 h-5', position: '-top-10 right-1/4', delay: '1.5s', duration: '22s' },
    { size: 'w-4 h-4', position: '-bottom-12 right-1/3', delay: '2.5s', duration: '17s' },
    { size: 'w-6 h-6', position: '-bottom-16 left-1/4', delay: '3.5s', duration: '19s' },
  ];
  
  return (
    <>
      {elements.map((element, index) => (
        <div 
          key={index}
          className={`absolute ${element.position} ${element.size} opacity-70 animate-float`}
          style={{ 
            animationDelay: element.delay, 
            animationDuration: element.duration,
            backgroundColor: index % 2 === 0 ? '#D3EAF2' : '#B0E0E6',
            borderRadius: index % 3 === 0 ? '50%' : '20%',
            transform: `rotate(${index * 45}deg)`
          }}
        ></div>
      ))}
    </>
  );
};

export default DecorativeElements;