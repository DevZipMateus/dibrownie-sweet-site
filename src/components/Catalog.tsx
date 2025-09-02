import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: 'Alfajor Chocolate Branco',
      description: 'Alfajor Premium com cobertura de chocolate branco e recheio cremoso de doce de leite',
      image: '/lovable-uploads/dcef2534-3506-4a6d-a3e0-6b25b4d67406.png',
      weight: '60g',
      category: 'Alfajor',
      highlight: 'Clássico'
    },
    {
      id: 2,
      name: 'Alfajor Chocolate Preto',
      description: 'Alfajor Premium com cobertura de chocolate meio amargo e recheio de doce de leite',
      image: '/lovable-uploads/0c357bd8-762b-404f-a9bf-bea830cd5021.png',
      weight: '60g',
      category: 'Alfajor',
      highlight: 'Premium'
    },
    {
      id: 3,
      name: 'Alfajor Chocolate Branco Mini',
      description: 'Versão compacta do nosso alfajor de chocolate branco, ideal para qualquer momento',
      image: '/lovable-uploads/9a7ea4a3-df16-485a-839f-0747052de2f9.png',
      weight: '45g',
      category: 'Alfajor',
      highlight: 'Mini'
    },
    {
      id: 4,
      name: 'Alfajor Chocolate Preto Mini',
      description: 'Versão compacta do nosso alfajor de chocolate meio amargo, perfeito para um lanche rápido',
      image: '/lovable-uploads/01b6226f-a084-450b-81a5-86506c75c359.png',
      weight: '45g',
      category: 'Alfajor',
      highlight: 'Mini'
    },
    {
      id: 5,
      name: 'Brownie Creme de Avelã',
      description: 'Brownie artesanal de chocolate com delicioso recheio de creme de avelã',
      image: '/lovable-uploads/4419def1-b262-4ff4-a6a6-a0b19bbbea3c.png',
      weight: '80g',
      category: 'Brownie',
      highlight: 'Sabor Especial'
    },
    {
      id: 6,
      name: 'Brownie Brigadeiro',
      description: 'Brownie artesanal de chocolate com irresistível recheio de brigadeiro',
      image: '/lovable-uploads/9e7ecc7c-b0f0-4621-b1b4-f83688380d4c.png',
      weight: '80g',
      category: 'Brownie',
      highlight: 'Favorito das Crianças'
    },
    {
      id: 7,
      name: 'Brownie Doce de Leite',
      description: 'Brownie artesanal de chocolate com cremoso recheio de doce de leite',
      image: '/lovable-uploads/9656cd59-9fc8-4e1e-a115-7696ebfbbe9f.png',
      weight: '80g',
      category: 'Brownie',
      highlight: 'Mais Vendido'
    },
    {
      id: 8,
      name: 'Brownie Nozes',
      description: 'Brownie artesanal de chocolate com crocantes pedaços de nozes',
      image: '/lovable-uploads/9d8f3c81-d939-4946-b1e2-cc18f398bdc6.png',
      weight: '80g',
      category: 'Brownie',
      highlight: 'Crocante'
    },
    {
      id: 9,
      name: 'Brownie Tradicional',
      description: 'Nosso clássico brownie artesanal de chocolate, receita original da Di Brownie',
      image: '/lovable-uploads/52dbcc8d-1fb1-4979-bdb4-7cd85052750c.png',
      weight: '80g',
      category: 'Brownie',
      highlight: 'Receita Original'
    }
  ];

  const handleSaberMais = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o ${productName}. Podem me ajudar com informações sobre preços e disponibilidade?`;
    const whatsappUrl = `https://wa.me/5521985011644?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="catalogo" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 sm:mb-6">
            Catálogo de Produtos
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Conheça nossa linha completa de brownies e alfajores artesanais
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group border-0 shadow-elegant bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:scale-105 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-subtle p-6 sm:p-8">
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain max-w-[200px] max-h-[200px] group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-secondary/90 text-white border-0 text-xs"
                >
                  {product.category}
                </Badge>
                
                {/* Highlight Badge */}
                <Badge 
                  variant="outline" 
                  className="absolute top-4 right-4 bg-white/90 text-primary border-primary/20 text-xs"
                >
                  {product.highlight}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-primary leading-tight group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full ml-2 shrink-0">
                    {product.weight}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed h-12 overflow-hidden text-ellipsis">
                  {product.description}
                </p>
                
                <Button 
                  onClick={() => handleSaberMais(product.name)}
                  className="w-full bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0 text-sm sm:text-base py-2 sm:py-3 flex items-center justify-center gap-2"
                >
                  <img 
                    src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
                    alt="WhatsApp" 
                    className="w-4 h-4 object-contain"
                  />
                  Saber Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Button 
            onClick={() => handleSaberMais('catálogo completo')}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white shadow-warm border-0 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
          >
            <img 
              src="/lovable-uploads/f49c33c4-a3c0-4957-9df8-2cb478760990.png" 
              alt="WhatsApp" 
              className="w-5 h-5 object-contain mr-2"
            />
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;