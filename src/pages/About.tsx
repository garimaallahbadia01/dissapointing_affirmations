import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 text-center">
          About Us
        </h1>
        
        <div className="space-y-6 text-foreground/80 font-sans text-base sm:text-lg leading-relaxed">
          <p>
            Deflated Affirmations was born from the simple observation that sometimes, 
            the most honest thing you can do is admit that everything isn't always sunshine and rainbows.
          </p>
          
          <p>
            Our cards offer a refreshing take on the traditional affirmation card—one that 
            acknowledges the messiness of life while still finding humor and beauty in it all.
          </p>
          
          <p>
            Each card is designed with care, featuring artwork inspired by classical paintings 
            paired with messages that are equal parts sardonic and sincere. Because sometimes, 
            you just need a card that says what you're actually thinking.
          </p>
          
          <p>
            Whether you're looking for a gift for your most cynical friend or just need a 
            daily reminder that it's okay to not have it all together, we've got you covered.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
