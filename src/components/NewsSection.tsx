
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "TESMEC на международной выставке ELECTRA 2025",
      date: "15 марта 2025",
      excerpt: "Компания TESMEC представит свои новейшие разработки на ведущей международной выставке электроэнергетического оборудования",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      link: "/news/1"
    },
    {
      id: 2,
      title: "Новая линейка траншеекопателей TESMEC",
      date: "2 февраля 2025",
      excerpt: "TESMEC представляет инновационную линейку траншеекопателей с увеличенной производительностью и сниженным расходом топлива",
      image: "https://images.unsplash.com/photo-1652602545230-c611f0575083?q=80&w=2070&auto=format&fit=crop",
      link: "/news/2"
    },
    {
      id: 3,
      title: "Завершение крупного проекта в Сибири",
      date: "10 января 2025",
      excerpt: "Компания TESMEC успешно завершила поставку оборудования для строительства ЛЭП в Сибирском регионе",
      image: "https://images.unsplash.com/photo-1519693360197-28690fb7144b?q=80&w=2070&auto=format&fit=crop",
      link: "/news/3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Новости и события</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Актуальная информация о новинках продукции, выставках и достижениях компании
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to={item.link} 
                  className="text-primary font-semibold hover:underline inline-flex items-center"
                >
                  Читать далее 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link to="/news">Все новости</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
