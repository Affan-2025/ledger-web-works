import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Expert Accounting Services
          <br />
          <span className="text-accent">You Can Trust</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Streamline your finances with our comprehensive accounting solutions. 
          From tax preparation to financial consulting, we've got your business covered.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3">
            Schedule Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3">
            View Services
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="opacity-90">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="opacity-90">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;