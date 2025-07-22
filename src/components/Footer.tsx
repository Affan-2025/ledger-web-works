const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AccountPro</span>
            </div>
            <p className="opacity-90 mb-4">
              Your trusted partner for comprehensive accounting services and financial guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">Tax Preparation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bookkeeping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Financial Consulting</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Audit Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 opacity-90">
              <div>(555) 123-4567</div>
              <div>info@accountpro.com</div>
              <div>123 Business Plaza<br />Suite 456<br />Your City, State 12345</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light mt-8 pt-8 text-center opacity-90">
          <p>&copy; 2024 AccountPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;