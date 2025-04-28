
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";
import BusinessAreas from "@/components/BusinessAreas";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <BusinessAreas />
        <FeaturedProducts />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
