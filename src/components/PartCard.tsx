import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SparePart } from '@/data/partsData';
import { Eye, ShoppingCart } from 'lucide-react';

interface PartCardProps {
  part: SparePart;
}

const PartCard = ({ part }: PartCardProps) => {
  return (
    <Card className="bg-gradient-card hover:shadow-automotive transition-all duration-300 hover:scale-105 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={part.imageUrl}
            alt={part.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={part.inStock ? "default" : "destructive"} className="bg-gradient-accent">
              {part.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg text-automotive-dark group-hover:text-primary transition-colors">
            {part.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {part.description}
          </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-2xl font-bold text-primary">${part.price}</p>
          <Badge variant="outline" className="text-xs">
            {part.category}
          </Badge>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-automotive-dark">Compatible with:</p>
          <div className="flex flex-wrap gap-1">
            {part.compatibleCars.slice(0, 2).map((car, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {car}
              </Badge>
            ))}
            {part.compatibleCars.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{part.compatibleCars.length - 2} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/parts/${part.id}`} className="flex-1">
          <Button variant="outline" className="w-full" disabled={!part.inStock}>
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </Link>
        <Button 
          className="bg-gradient-accent hover:bg-accent/90" 
          disabled={!part.inStock}
          onClick={() => {
            // Add to cart functionality would go here
            console.log('Added to cart:', part.name);
          }}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PartCard;