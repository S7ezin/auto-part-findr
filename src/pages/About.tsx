import { Car, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About 7x Car Hub</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for genuine car spare parts since 2020
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in Dubai, 7x Car Hub has been serving the automotive community with 
                premium quality spare parts for over 4 years. We understand that your vehicle 
                is more than just transportation - it's your freedom, your reliability, and your peace of mind.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to provide genuine, high-quality automotive parts at competitive 
                prices, backed by exceptional customer service and technical expertise.
              </p>
              <Link to="/parts">
                <Button className="bg-accent hover:bg-accent/90">
                  Browse Our Parts
                </Button>
              </Link>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600" 
                alt="Car parts warehouse" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">10,000+</h3>
              <p className="text-muted-foreground">Parts Available</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">5,000+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Genuine Parts</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only genuine parts from trusted manufacturers to ensure 
                  your vehicle performs at its best.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We provide expert advice and 
                  support throughout your purchase journey.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Fair Pricing</h3>
                <p className="text-muted-foreground">
                  We believe quality parts should be accessible. Our competitive 
                  pricing ensures you get the best value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;