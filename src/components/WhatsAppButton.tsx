import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5521985011644', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={handleClick}
          className="bg-white text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-warm flex items-center justify-center hover:scale-110 transition-all duration-300 group p-2 sm:p-3 cursor-pointer"
          aria-label="Falar no WhatsApp"
          style={{ pointerEvents: 'auto' }}
        >
          <img 
            src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
            alt="WhatsApp" 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold pointer-events-none">
          1
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-14 sm:bottom-16 right-0 bg-primary text-primary-foreground px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-elegant animate-fade-in max-w-[200px] sm:max-w-none">
        <span className="hidden sm:inline">Fale conosco no WhatsApp!</span>
        <span className="sm:hidden">WhatsApp</span>
        <div className="absolute top-full right-3 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;