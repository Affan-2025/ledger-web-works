import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services to minimize your liability and maximize your returns. We handle individual, business, and estate taxes.",
      icon: "📊"
    },
    {
      title: "Bookkeeping Services",
      description: "Professional bookkeeping to keep your financial records accurate and up-to-date. Monthly statements and reconciliation included.",
      icon: "📚"
    },
    {
      title: "Financial Consulting",
      description: "Strategic financial advice to help your business grow. We provide insights on cash flow, budgeting, and financial planning.",
      icon: "💼"
    },
    {
      title: "Audit & Assurance",
      description: "Independent audit services to ensure compliance and provide stakeholders with confidence in your financial statements.",
      icon: "🔍"
    },
    {
      title: "Payroll Management",
      description: "Complete payroll processing including tax withholdings, direct deposits, and compliance with federal and state regulations.",
      icon: "💰"
    },
    {
      title: "Business Formation",
      description: "Help establish your business with proper structure, registration, and ongoing compliance support for all entity types.",
      icon: "🏢"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive accounting solutions tailored to meet your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;