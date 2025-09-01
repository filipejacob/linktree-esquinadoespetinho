import React from 'react';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import { Menu, MessageCircle, MapPin, Instagram, UtensilsCrossed } from 'lucide-react';

function App() {
  const links = [
    {
      icon: Menu,
      text: ' Cardápio Online',
      url: './cardapio.pdf',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: UtensilsCrossed,
      text: ' Peça - Mais Delivery',
      url: 'https://maisdeliveryapp.com.br/web/loja.php?id=NTcyODU=',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: MessageCircle,
      text: ' Peça pelo WhatsApp',
      url: 'https://wa.me/5564993041007',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      text: ' Localização',
      url: 'https://maps.app.goo.gl/o6eTQQQtVQtPnjhXA',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      text: ' Instagram',
      url: 'https://www.instagram.com/esquinadoespetinhoslmb/',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
            
            <Header />
            
            {/* Links Section */}
            <div className="space-y-4">
              {links.map((link, index) => (
                <LinkButton
                  key={index}
                  icon={link.icon}
                  text={link.text}
                  url={link.url}
                  gradient={link.gradient}
                  delay={index * 100}
                />
              ))}
            </div>
            
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
