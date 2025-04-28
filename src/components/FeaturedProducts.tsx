
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Натяжные машины",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      description: "Высокотехнологичные натяжные машины для монтажа проводов ЛЭП и кабелей связи",
      link: "/products/stringing"
    },
    {
      id: 2,
      name: "Траншеекопатели",
      image: "https://images.unsplash.com/photo-1522441855109-7fe8304c13d9?q=80&w=2069&auto=format&fit=crop",
      description: "Современные траншеекопатели для прокладки подземных коммуникаций",
      link: "/products/trenchers"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Инновационные технологии и оборудование для различных отраслей промышленности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Link to={product.link}>Подробнее</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/products">Смотреть все продукты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
