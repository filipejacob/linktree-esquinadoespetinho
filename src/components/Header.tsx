import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-center space-y-4 mb-8">
      {/* Profile Picture */}
      <div className="relative mx-auto w-32 h-32 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-1 animate-pulse-glow">
          <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="/teste.jpg" 
              alt="Logo Espetinho" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Restaurant Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
          Esquina do
        </span>
        <br />
        <span className="text-white drop-shadow-lg">
          Espetinho
        </span>
      </h1>
      
      {/* Description */}
      <p className="text-lg md:text-xl text-orange-100 font-medium px-4 leading-relaxed">
        🍖 Jantinha • Espetinhos • Churrasco na Brasa 🍺
      </p>
      
      {/* Decorative elements */}
      <div className="flex justify-center space-x-2 mt-4">
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
    </div>
  );
};

export default Header;
