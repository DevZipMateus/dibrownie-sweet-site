import { Card } from '@/components/ui/card';
import { Heart, Award, Users, MapPin } from 'lucide-react';
import aboutImage from '@/assets/about-us-bakery.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 sm:mb-6">
            Nossa História
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Uma jornada de 10 anos adoçando momentos e criando conexões especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          {/* Story Content */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                Fundada em <strong>2015</strong> por <strong>Diogo Seixas</strong>, a Di Brownie nasceu com o propósito de criar brownies especiais que tornassem os dias das pessoas mais doces e memoráveis.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                Desde o início, a criatividade esteve presente até mesmo no nome: o <strong>"Di"</strong> não apenas homenageia seu fundador, mas também faz um trocadilho afetuoso com o jeito único e carinhoso de quem é <strong>"Di Niterói"</strong>, expressão típica da cidade onde tudo começou.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed text-foreground">
                Ao longo de 10 anos de trajetória, crescemos lado a lado com a confiança de nossos clientes e parceiros. Ampliamos nosso portfólio, incluindo os irresistíveis <strong>alfajores</strong>, e seguimos em constante inovação.
              </p>
            </div>

            {/* Mission and Vision */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <Card className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mb-3 sm:mb-4" />
                <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary">Nossa Missão</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Ser referência nacional no mercado de bomboniere, oferecendo produtos que unem qualidade e inovação, capazes de encantar clientes e criar experiências únicas.
                </p>
              </Card>
              
              <Card className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm border-0 shadow-elegant">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mb-3 sm:mb-4" />
                <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary">Nossa Visão</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Tornar-se a marca que inspira e conecta pessoas por meio da qualidade, inovação e transparência, adoçando momentos em todo o país.
                </p>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
                <img 
                  src={aboutImage} 
                  alt="Interior da Di Brownie - Ambiente acolhedor e moderno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-elegant border border-border/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">2015</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Fundação</div>
              </div>
            </div>
            
            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-secondary rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-warm text-white">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold">5.000+</div>
                <div className="text-xs sm:text-sm opacity-90">Pontos de Venda</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-1 sm:mb-2">10</div>
            <div className="text-sm sm:text-base text-muted-foreground">Anos de Experiência</div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-1 sm:mb-2">8</div>
            <div className="text-sm sm:text-base text-muted-foreground">Estados Brasileiros</div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-1 sm:mb-2">5.000+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Pontos de Venda</div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-1 sm:mb-2">100%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Artesanal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;