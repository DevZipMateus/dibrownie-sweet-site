import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-section">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/8c2ab650-6d92-4dd3-819f-8255f85c4677.png" 
            alt="Di Brownie Logo" 
            className="h-20 w-auto mx-auto mb-6"
          />
          <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-primary mb-4">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida. 
            Que tal conhecer nossos deliciosos brownies e alfajores?
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            asChild
            className="w-full bg-gradient-hero hover:opacity-90 text-white shadow-warm border-0"
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </a>
          </Button>
          
          <Button 
            variant="outline"
            className="w-full bg-white/50 border-secondary/60 text-primary hover:bg-secondary hover:text-white backdrop-blur-sm"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Página Anterior
          </Button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Ou entre em contato conosco pelo{" "}
            <a 
              href="https://wa.me/5521985011644" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline font-medium"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
