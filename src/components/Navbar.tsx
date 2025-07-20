import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/parts', label: 'Browse Parts' },
    ...(user ? [{ path: '/profile', label: 'Profile' }] : [])
  ];

  return (
    <nav className="bg-gradient-hero shadow-automotive sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-primary-foreground hover:text-accent transition-colors">
            <Car className="h-8 w-8" />
            <span className="font-bold text-xl">7x Car Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-primary-foreground hover:text-accent transition-colors font-medium ${
                  isActive(link.path) ? 'text-accent border-b-2 border-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-primary-foreground">Welcome, {user.name}</span>
                <Button variant="outline" onClick={logout} className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signin">
                  <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary-glow"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-glow">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-primary-foreground hover:text-accent transition-colors font-medium ${
                    isActive(link.path) ? 'text-accent' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {user ? (
                <div className="space-y-2 pt-4 border-t border-primary-glow">
                  <span className="block text-primary-foreground">Welcome, {user.name}</span>
                  <Button 
                    variant="outline" 
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="w-full text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2 pt-4 border-t border-primary-glow">
                  <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;