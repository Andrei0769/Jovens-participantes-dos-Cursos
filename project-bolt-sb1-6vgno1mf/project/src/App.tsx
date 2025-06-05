import React from 'react';
import Invitation from './components/Invitation';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Invitation 
        title="Preencha nosso Formulário" 
        message="Nos ajude a te conhecer melhor"
        ctaText="Confirmar Presença" 
        ctaLink="https://ee.kobotoolbox.org/x/wl4NabCM" 
      />
    </div>
  );
}

export default App;