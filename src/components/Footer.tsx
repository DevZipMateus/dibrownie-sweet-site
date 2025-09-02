import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
      {/* Chocolate Dripping Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        {/* Wave Layer 1 */}
        <div className="absolute top-0 left-0 w-[200%] h-full animate-wave-flow">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,60 300,0 450,40 C600,80 750,20 900,50 C1050,80 1200,30 1200,30 L1200,0 Z"
              fill="hsl(var(--secondary))"
              opacity="0.3"
            />
          </svg>
        </div>
        
        {/* Wave Layer 2 */}
        <div className="absolute top-0 left-0 w-[200%] h-full animate-wave-flow-slow">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 C200,70 400,10 600,50 C800,90 1000,40 1200,60 L1200,0 Z"
              fill="hsl(var(--accent))"
              opacity="0.4"
            />
          </svg>
        </div>
        
        {/* Wave Layer 3 */}
        <div className="absolute top-0 left-0 w-[200%] h-full animate-wave-flow" style={{animationDuration: '12s'}}>
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 C100,80 250,20 400,60 C550,100 700,50 850,70 C1000,90 1150,40 1200,50 L1200,0 Z"
              fill="hsl(var(--muted))"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/8c2ab650-6d92-4dd3-819f-8255f85c4677.png" 
                alt="Di Brownie Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Há 10 anos adoçando momentos e inspirando conexões com brownies e alfajores artesanais de qualidade premium.
            </p>
            <p className="text-sm font-semibold text-secondary">
              "Adoçando momentos, inspirando conexões."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#inicio" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#produtos" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Nossos Produtos
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Brownie Tradicional</li>
              <li className="text-primary-foreground/80">Brownie Doce de Leite</li>
              <li className="text-primary-foreground/80">Brownie Brigadeiro</li>
              <li className="text-primary-foreground/80">Brownie Creme de Avelã</li>
              <li className="text-primary-foreground/80">Alfajor Chocolate Preto</li>
              <li className="text-primary-foreground/80">Alfajor Chocolate Branco</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Contato
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="https://wa.me/5521985011644" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    (21) 98501-1644
                  </a>
                  <p className="text-primary-foreground/60 text-xs">WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:contato@dibrownie.com.br"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  contato@dibrownie.com.br
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  Rua General Silvestre Rocha 143<br />
                  Icaraí - Niterói - RJ<br />
                  CEP: 24220-170
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://instagram.com/di.brownie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  @di.brownie
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">10</div>
              <div className="text-xs text-primary-foreground/60">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">8</div>
              <div className="text-xs text-primary-foreground/60">Estados Brasileiros</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">5.000+</div>
              <div className="text-xs text-primary-foreground/60">Pontos de Venda</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">100%</div>
              <div className="text-xs text-primary-foreground/60">Artesanal</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Di Brownie. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-secondary fill-current" />
              <span>em Niterói - RJ</span>
            </div>
            
            <div>
              <span>CNPJ: 51.934.158/0001-70</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;