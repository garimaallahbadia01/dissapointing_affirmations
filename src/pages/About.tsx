import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
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
          Garima Allahbadia built this site as a conceptual project exploring AI tools because sometimes 
          the best way to learn is to create something that doesn't take itself too seriously.
          </p>
          
          <p>
            A note on expectations
This is version one. It's functional but not perfect. Some features need refinement.
But it's out there. And sometimes "shipped and imperfect" is better than "perfect and conceptual."
Which feels very on-brand for a project about lowering expectations.
          </p>
          
          <p>
            If you have thoughts, feedback, or just want to share your own disappointing affirmations:
            Reach out to me: garimaallahbadia01@gmail.com
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
