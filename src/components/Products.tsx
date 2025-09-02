import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import brownieImage from '@/assets/brownie-varieties.jpg';
import alfajoresImage from '@/assets/alfajores-premium.jpg';

const Products = () => {
  const brownies = [
    {
      name: 'Brownie Tradicional',
      description: 'Nosso clássico brownie artesanal, preparado com chocolate premium e ingredientes selecionados.',
      highlight: 'Receita Original'
    },
    {
      name: 'Brownie Doce de Leite',
      description: 'Delicioso brownie com cobertura cremosa de doce de leite artesanal.',
      highlight: 'Mais Vendido'
    },
    {
      name: 'Brownie Brigadeiro',
      description: 'Brownie especial coberto com brigadeiro cremoso e granulado.',
      highlight: 'Favorito das Crianças'
    },
    {
      name: 'Brownie Creme de Avelã',
      description: 'Irresistível brownie com cobertura de creme de avelã premium.',
      highlight: 'Sabor Especial'
    }
  ];

  const alfajores = [
    {
      name: 'Alfajor Chocolate Preto',
      description: 'Alfajor artesanal coberto com chocolate meio amargo e recheado com doce de leite.',
      highlight: 'Premium'
    },
    {
      name: 'Alfajor Chocolate Branco',
      description: 'Delicioso alfajor com cobertura de chocolate branco e recheio cremoso.',
      highlight: 'Clássico'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Brownies e alfajores artesanais feitos com ingredientes premium e muito carinho
          </p>
        </div>

        {/* Brownies Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 animate-slide-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  Brownies Artesanais
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossos brownies são preparados artesanalmente com chocolate premium e ingredientes selecionados. 
                Cada pedaço é uma experiência única de sabor e textura.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {brownies.map((brownie, index) => (
                  <Card key={index} className="p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-heading font-semibold text-lg text-primary leading-tight">
                        {brownie.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-0">
                        {brownie.highlight}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {brownie.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={brownieImage} 
                  alt="Variedades de Brownies Artesanais Di Brownie"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Alfajores Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={alfajoresImage} 
                  alt="Alfajores Premium Di Brownie"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>

            <div className="animate-slide-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  Alfajores Premium
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossos alfajores são uma explosão de sabor! Preparados com massa especial, 
                recheio cremoso de doce de leite e cobertura de chocolate de primeira qualidade.
              </p>

              <div className="space-y-4 mb-8">
                {alfajores.map((alfajor, index) => (
                  <Card key={index} className="p-6 border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-heading font-semibold text-lg text-primary leading-tight">
                        {alfajor.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-0">
                        {alfajor.highlight}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {alfajor.description}
                    </p>
                  </Card>
                ))}
              </div>

              <Button 
                asChild
                className="bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0 text-lg px-8 py-6"
              >
                <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer">
                  Solicite um Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white shadow-warm">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Quer ser nosso parceiro?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Junte-se aos mais de 5.000 pontos de venda em 8 estados brasileiros
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/60 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg px-8 py-6 font-semibold"
              asChild
            >
              <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer">
                Torne-se um Parceiro
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;