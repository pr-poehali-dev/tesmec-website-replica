
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Map, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Свяжитесь с нами для получения дополнительной информации о нашей продукции и услугах.
              Мы всегда рады помочь вам найти оптимальное решение для ваших задач.
            </p>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-6">Наши офисы</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Центральный офис TESMEC Россия</h3>
                    <p className="text-gray-700">
                      115 054, г. Москва, Павелецкая площадь, д. 2, стр. 2, 7 этаж
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-700">+7 (495) 374-67-11</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Электронная почта</h3>
                    <p className="text-gray-700">info.russia@tesmec.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Часы работы</h3>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">Представительства в других странах</h3>
                <p className="text-gray-700 mb-4">
                  TESMEC Group имеет представительства во многих странах мира. 
                  Для получения контактной информации в вашем регионе, пожалуйста, свяжитесь с нами.
                </p>
                <Button variant="outline" className="text-primary">
                  Все международные контакты
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-6">Свяжитесь с нами</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя *
                    </label>
                    <Input id="name" required placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input id="email" type="email" required placeholder="ваш@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Компания
                  </label>
                  <Input id="company" placeholder="Название вашей компании" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Тема *
                  </label>
                  <Input id="subject" required placeholder="Тема сообщения" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение *
                  </label>
                  <Textarea 
                    id="message" 
                    required
                    placeholder="Опишите ваш запрос подробнее..." 
                    rows={6}
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                    Отправить сообщение
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Map className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Наше расположение</h2>
            </div>
            
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-gray-600">Карта загружается...</p>
                <p className="text-sm text-gray-500 mt-2">
                  (На реальном сайте здесь будет интерактивная карта с офисом TESMEC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts;
