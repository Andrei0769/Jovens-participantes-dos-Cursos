import React, { useEffect, useRef } from 'react';
import { useParticles } from '../hooks/useParticles';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initParticles } = useParticles();
  
  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initParticles(canvasRef.current);
      return cleanup;
    }
  }, [initParticles]);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#B0E0E6] to-[#ADD8E6] animate-gradient-slow"></div>
      
      {/* Particles canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full opacity-50"
      ></canvas>
      
      {/* Animated wave effect */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 md:h-96 opacity-20">
          <div className="absolute h-full w-[200%] animate-wave-slow" 
               style={{
                 backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 C150,90 350,0 500,100 C650,190 850,100 1000,190 L1200,120 L1200,0 L0,0 Z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
                 backgroundRepeat: 'repeat-x',
                 backgroundSize: '50% 100%',
                 backgroundPosition: '0 bottom'
               }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;