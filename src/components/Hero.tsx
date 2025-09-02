import { Button } from '@/components/ui/button';
import { Star, Award, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/4efac801-94b1-4f21-b448-cd9420749e4e.png" 
          alt="Brownies e Alfajores Artesanais Di Brownie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-white h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/20 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 lg:mb-8">
              <img 
                src="/lovable-uploads/8c2ab650-6d92-4dd3-819f-8255f85c4677.png" 
                alt="Di Brownie Logo" 
                className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto filter drop-shadow-lg"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              Brownies e Alfajores
              <span className="block text-secondary">Artesanais</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl font-medium opacity-90 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Adoçando momentos, inspirando conexões
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl opacity-80 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Há 10 anos criando brownies especiais que tornam os dias das pessoas mais doces e memoráveis
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 xl:gap-12 py-4 sm:py-6 lg:py-8 px-4 lg:px-0">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="font-semibold">10 Anos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="font-semibold hidden sm:inline">5.000+ Pontos</span>
                <span className="font-semibold sm:hidden">5k+ Pontos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="font-semibold">8 Estados</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center pt-2 sm:pt-4 px-4 lg:px-0">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white border-0 shadow-warm text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
                onClick={() => scrollToSection('produtos')}
              >
                Conheça Nossos Produtos
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 border-white/60 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
                asChild
              >
                <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <img 
                    src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 object-contain opacity-90"
                  />
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <video 
                className="w-full h-auto max-w-md rounded-xl shadow-2xl"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controls={false}
              >
                <source src="/lovable-uploads/galeria/doce.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;