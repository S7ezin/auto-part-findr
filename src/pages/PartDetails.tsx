import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { spareParts } from '@/data/partsData';
import { ArrowLeft, ShoppingCart, Heart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

const PartDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  
  const part = spareParts.find(p => p.id === id);

  if (!part) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-automotive-dark">Part Not Found</h2>
            <p className="text-muted-foreground">The requested part could not be found.</p>
            <Link to="/parts">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Browse
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${part.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please sign in to add items to your wishlist.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to Wishlist",
      description: `${part.name} has been added to your wishlist.`,
    });
  };

  const features = [
    { icon: Shield, text: "Quality Guaranteed" },
    { icon: Truck, text: "Fast Shipping" },
    { icon: RotateCcw, text: "Easy Returns" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/parts" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Browse Parts
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={part.imageUrl}
                alt={part.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-automotive group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge variant={part.inStock ? "default" : "destructive"} className="bg-gradient-accent">
                  {part.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>
            </div>
            
            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-4">
                  <feature.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">{feature.text}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {part.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-automotive-dark mb-4">
                {part.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.8/5 - 124 reviews)</span>
              </div>
              <p className="text-4xl font-bold text-primary mb-6">
                ${part.price}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {part.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Compatible Vehicles</h3>
              <div className="flex flex-wrap gap-2">
                {part.compatibleCars.map((car, index) => (
                  <Badge key={index} variant="secondary">
                    {car}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Product Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{part.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium">{part.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Warranty:</span>
                  <span className="font-medium">12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span className="font-medium">Free shipping on orders over $50</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-accent hover:bg-accent/90"
                  disabled={!part.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              {!part.inStock && (
                <p className="text-sm text-muted-foreground text-center">
                  This item is currently out of stock. Check back soon!
                </p>
              )}
            </div>

            {/* Additional Info */}
            <Card className="bg-automotive-chrome/10">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Not sure if this part is right for your vehicle? Our experts are here to help!
                </p>
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDetails;