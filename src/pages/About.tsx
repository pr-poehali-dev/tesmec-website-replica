
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <p className="text-xl max-w-3xl">
              Уже более 70 лет TESMEC разрабатывает, производит и продает системы и интегрированные решения для строительства, обслуживания и эффективности инфраструктурных сетей.
            </p>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">История компании</h2>
              <p className="text-gray-700 mb-4">
                История компании TESMEC началась в 1951 году, когда была основана компания "TECNOLOGIE ELETTRICHE SPECIALI MECCANICHE" в Италии.
              </p>
              <p className="text-gray-700 mb-4">
                За прошедшие десятилетия TESMEC превратилась в международную группу, которая сегодня является лидером в области проектирования, производства и продажи систем, технологий и интегрированных решений для строительства, обслуживания и эффективности инфраструктурных сетей.
              </p>
              <p className="text-gray-700">
                Компания TESMEC котируется на Миланской фондовой бирже и управляется председателем и генеральным директором Амедео Коцианчичем.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1624365169198-254347e8224b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="TESMEC Headquarters" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <Separator />
        
        {/* Mission & Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">Миссия и ценности</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Наша миссия</h3>
                <p className="text-gray-700 mb-4">
                  Наша миссия - создавать инновационные решения для развития и обслуживания критически важной инфраструктуры в энергетическом, телекоммуникационном и транспортном секторах.
                </p>
                <p className="text-gray-700">
                  Мы стремимся обеспечивать клиентов по всему миру высокотехнологичными и надежными продуктами, которые способствуют устойчивому развитию и эффективности.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Наши ценности</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Инновации</h4>
                      <p className="text-gray-600">Постоянное развитие и внедрение новых технологий</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-1.5-1.5"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Качество</h4>
                      <p className="text-gray-600">Безкомпромиссное качество продукции и услуг</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Устойчивое развитие</h4>
                      <p className="text-gray-600">Забота об окружающей среде и социальная ответственность</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Global Presence Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Наше глобальное присутствие</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-700 mb-8">
              Сегодня TESMEC Group имеет глобальное присутствие с производственными и коммерческими сайтами в Италии, США, Франции, России, ЮАР, Китае, Австралии и Новой Зеландии.
            </p>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
                alt="TESMEC Global Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
