import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="pt-16 pb-8 md:pt-18 md:pb-10 lg:pt-20 lg:pb-12 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para adoçar seus momentos. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 border-0 shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                      <a 
                        href="https://wa.me/5521985011644" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        (21) 98501-1644
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        WhatsApp disponível
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                      <a 
                        href="mailto:contato@dibrownie.com.br"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        contato@dibrownie.com.br
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                      <p className="text-muted-foreground">
                        Rua General Silvestre Rocha 143<br />
                        Icaraí - Niterói - RJ<br />
                        CEP: 24220-170
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 08:00 às 18:00
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-elegant bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Redes Sociais</h4>
                      <a 
                        href="https://instagram.com/di.brownie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        @di.brownie
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Button 
                asChild
                className="w-full bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0 text-lg px-8 py-6"
              >
                <a href="https://wa.me/5521985011644" target="_blank" rel="noopener noreferrer">
                  Fale Conosco no WhatsApp
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="w-full bg-white/50 border-secondary/60 text-primary hover:bg-secondary hover:text-white backdrop-blur-sm text-lg px-8 py-6"
                asChild
              >
                <a href="mailto:contato@dibrownie.com.br">
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-6 shadow-elegant">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Nossa Localização
              </h3>
              
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890123!2d-43.1234567!3d-22.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e5678901234567%3A0x1234567890abcdef!2sRua%20General%20Silvestre%20Rocha%2C%20143%20-%20Icaraí%2C%20Niterói%20-%20RJ%2C%2024220-170!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Di Brownie - Icaraí, Niterói"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-primary">Di Brownie</strong><br />
                  Rua General Silvestre Rocha 143 - Icaraí<br />
                  Niterói - RJ - CEP: 24220-170
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;