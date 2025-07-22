const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trusted Financial Partners Since 2008
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AccountPro has been providing exceptional accounting services to businesses and individuals 
              for over 15 years. Our team of certified professionals combines expertise with personalized 
              service to deliver results that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that every client has unique needs, which is why we take the time to understand 
              your goals and challenges before crafting tailored solutions that drive success.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">CPA</div>
                <div className="text-sm text-muted-foreground">Certified Professionals</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-2xl p-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose AccountPro?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Personalized service tailored to your needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Proactive tax planning and strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Secure, cloud-based document management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <span className="text-muted-foreground">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;