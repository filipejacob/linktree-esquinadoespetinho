import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  icon: LucideIcon;
  text: string;
  url: string;
  gradient: string;
  delay?: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ 
  icon: Icon, 
  text, 
  url, 
  gradient,
  delay = 0 
}) => {
  const handleClick = () => {
    if (url.startsWith('#')) {
      // Handle internal links later
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full group relative overflow-hidden
        bg-gradient-to-r ${gradient}
        hover:shadow-2xl hover:shadow-orange-500/25
        transform hover:scale-105 hover:-translate-y-1
        transition-all duration-300 ease-out
        rounded-2xl p-4 md:p-5
        border-2 border-white/10 hover:border-white/30
        animate-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      transform -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-1000 ease-in-out"></div>
      
      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center space-x-3">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-white font-semibold text-lg md:text-xl tracking-wide">
          {text}
        </span>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    </button>
  );
};

export default LinkButton;