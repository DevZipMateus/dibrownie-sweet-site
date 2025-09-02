import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5521985011644', '_blank', 'noopener,noreferrer');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Expanded Chat Preview */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-elegant border border-border p-3 sm:p-4 w-72 sm:w-80 animate-fade-in max-w-[calc(100vw-2rem)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center p-1.5 sm:p-2">
                <img 
                  src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
                  alt="WhatsApp" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-sm">Di Brownie</h4>
                <p className="text-xs text-muted-foreground">Online agora</p>
              </div>
            </div>
            <button
              onClick={toggleExpanded}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-3 mb-3">
            <p className="text-sm text-foreground">
              Olá! 👋 Como podemos adoçar o seu dia hoje?
            </p>
          </div>
          
          <div className="space-y-1.5 sm:space-y-2 text-xs text-muted-foreground">
            <p>• Informações sobre produtos</p>
            <p>• Solicitar orçamento</p>
            <p>• Tornar-se parceiro</p>
            <p>• Dúvidas em geral</p>
          </div>
          
          <button
            onClick={handleClick}
            className="w-full mt-3 sm:mt-4 bg-gradient-hero text-white py-2 px-4 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Iniciar Conversa
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={isExpanded ? handleClick : toggleExpanded}
          className="bg-white text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-warm flex items-center justify-center hover:scale-110 transition-all duration-300 group p-2 sm:p-3"
          aria-label="Falar no WhatsApp"
        >
          <img 
            src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
            alt="WhatsApp" 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
          />
        </button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold">
          1
        </div>
      </div>

      {/* Tooltip for first-time users */}
      {!isExpanded && (
        <div className="absolute bottom-14 sm:bottom-16 right-0 bg-primary text-primary-foreground px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-elegant animate-fade-in max-w-[200px] sm:max-w-none">
          <span className="hidden sm:inline">Fale conosco no WhatsApp!</span>
          <span className="sm:hidden">WhatsApp</span>
          <div className="absolute top-full right-3 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;