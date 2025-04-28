
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

const BusinessAreas = () => {
  const areas = [
    {
      id: 1,
      title: "Энергетические сети",
      description: "Оборудование для строительства и обслуживания линий электропередачи и подстанций",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
      link: "/solutions/energy"
    },
    {
      id: 2,
      title: "Телекоммуникации",
      description: "Оборудование для прокладки и обслуживания оптоволоконных и телекоммуникационных сетей",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      link: "/solutions/telecom"
    },
    {
      id: 3,
      title: "Железнодорожная инфраструктура",
      description: "Технологии для строительства и обслуживания железнодорожных сетей",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop",
      link: "/solutions/railway"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши направления деятельности</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Создаем инновационные решения для строительства и обслуживания инфраструктуры в ключевых отраслях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link to={area.link} key={area.id} className="hover-scale">
              <Card className="overflow-hidden h-full border-none shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
