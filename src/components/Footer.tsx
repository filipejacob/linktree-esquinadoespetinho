import React from 'react';
import { Flame } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center pb-6 px-4">
      <div className="flex items-center justify-center space-x-2 text-orange-200/80 text-sm">
        <Flame className="w-4 h-4" />
        <span>Feito com carinho na brasa – Esquina do Espetinho</span>
        <Flame className="w-4 h-4" />
      </div>
      
      {/* Additional info */}
      <div className="mt-2 text-xs text-orange-200/60">
        Aberto de terça a domingo • Das 18h às 23h
      </div>
    </footer>
  );
};

export default Footer;