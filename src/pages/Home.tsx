import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PartCard from '@/components/PartCard';
import { spareParts } from '@/data/partsData';
import { Search, Shield, Truck, Star } from 'lucide-react';
import heroImage from '@/assets/hero-automotive.jpg';

const Home = () => {
  const featuredParts = spareParts.slice(0, 4);

  const features = [
    {
      icon: Shield,
      title: 'Genuine Parts',
      description: 'Only authentic OEM and aftermarket parts from trusted manufacturers'
    },
    {
      icon: Search,
      title: 'Easy Search',
      description: 'Find the right part for your car with our advanced search filters'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping to get you back on the road faster'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'All parts come with warranty and satisfaction guarantee'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Find Genuine Car Spare Parts
              <span className="block text-accent">Easily</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Shop quality auto parts at great prices. From engine components to brake systems, 
              we have everything you need to keep your car running smoothly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/parts">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 animate-glow">
                  Browse Spare Parts
                </Button>
              </Link>
              
              <Link to="/parts">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3"
                >
                  Search by Car Model
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark mb-4">
              Why Choose 7x Car Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best experience for finding and purchasing auto parts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-automotive-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts Section */}
      <section className="py-16 bg-automotive-chrome/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark mb-4">
              Featured Parts
            </h2>
            <p className="text-xl text-muted-foreground">
              Popular spare parts trusted by thousands of customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredParts.map((part, index) => (
              <div key={part.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PartCard part={part} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/parts">
              <Button size="lg" variant="outline" className="bg-gradient-card hover:bg-card shadow-card">
                View All Parts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Find Your Parts?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust 7x Car Hub for their automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Create Account
              </Button>
            </Link>
            <Link to="/parts">
              <Button 
                size="lg" 
                variant="outline"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;