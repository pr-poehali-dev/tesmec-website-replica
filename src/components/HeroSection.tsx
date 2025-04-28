
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Решения для строительства и обслуживания инфраструктуры
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Технологии и оборудование для энергетики, телекоммуникаций, горнодобывающей отрасли и железнодорожной инфраструктуры
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link to="/products">Наши решения</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
