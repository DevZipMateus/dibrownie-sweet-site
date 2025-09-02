import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 w-full z-50 bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">(21) 98501-1644</span>
              <span className="xl:hidden">98501-1644</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="hidden xl:inline">contato@dibrownie.com.br</span>
              <span className="xl:hidden">contato@dibrownie.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 xl:w-4 xl:h-4" />
              <span>Icaraí - Niterói - RJ</span>
            </div>
          </div>
          <div className="text-xs xl:text-sm">
            Seg-Sex: 08:00 às 18:00
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 lg:top-8 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-background/80 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8c2ab650-6d92-4dd3-819f-8255f85c4677.png" 
                alt="Di Brownie - Brownies e Alfajores Artesanais" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('catalogo')}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                Catálogo
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                asChild
                className="bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0 flex items-center gap-2"
              >
                <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
                    alt="WhatsApp" 
                    className="w-4 h-4 object-contain"
                  />
                  Fale Conosco
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium"
                >
                  Catálogo
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium"
                >
                  Sobre Nós
                </button>
                <button
                  onClick={() => scrollToSection('produtos')}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium"
                >
                  Produtos
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-left text-foreground hover:text-secondary transition-colors font-medium"
                >
                  Contato
                </button>
                <div className="pt-2">
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0 flex items-center gap-2"
                  >
                    <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <img 
                        src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
                        alt="WhatsApp" 
                        className="w-4 h-4 object-contain"
                      />
                      Fale Conosco
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;