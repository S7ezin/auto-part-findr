import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">7x Car Hub</span>
            </div>
            <p className="text-automotive-silver">
              Your trusted source for genuine car spare parts. Quality parts at competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-automotive-silver hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/parts" className="block text-automotive-silver hover:text-accent transition-colors">
                Browse Parts
              </Link>
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                About Us
              </a>
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                Return Policy
              </a>
              <a href="#" className="block text-automotive-silver hover:text-accent transition-colors">
                Warranty
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-automotive-silver">
                <Mail className="h-4 w-4" />
                <span>info@7xcarhub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-automotive-silver">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-automotive-silver">
                <MapPin className="h-4 w-4" />
                <span>123 Auto Parts St, Car City, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-automotive-silver/20 mt-8 pt-8 text-center text-automotive-silver">
          <p>&copy; 2024 7x Car Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;