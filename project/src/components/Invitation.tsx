import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import InvitationContent from './InvitationContent';
import { InvitationProps } from '../types/invitation';

const Invitation: React.FC<InvitationProps> = ({ 
  title, 
  message, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4">
        <InvitationContent 
          title={title}
          message={message}
          ctaText={ctaText}
          ctaLink={ctaLink}
        />
      </div>
    </div>
  );
};

export default Invitation;