import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CardCarousel from '@/components/CardCarousel';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Navigation />
      <CardCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
