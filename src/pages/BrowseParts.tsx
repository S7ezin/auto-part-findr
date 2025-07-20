import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PartCard from '@/components/PartCard';
import { spareParts, categories } from '@/data/partsData';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const BrowseParts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [carModel, setCarModel] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique car models from all parts
  const allCarModels = useMemo(() => {
    const models = new Set<string>();
    spareParts.forEach(part => {
      part.compatibleCars.forEach(car => models.add(car));
    });
    return Array.from(models).sort();
  }, []);

  // Filter parts based on search criteria
  const filteredParts = useMemo(() => {
    return spareParts.filter(part => {
      // Search term filter
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;

      // Price range filter
      const matchesPrice = (() => {
        switch (priceRange) {
          case 'under-50':
            return part.price < 50;
          case '50-100':
            return part.price >= 50 && part.price <= 100;
          case '100-200':
            return part.price > 100 && part.price <= 200;
          case 'over-200':
            return part.price > 200;
          default:
            return true;
        }
      })();

      // Car model filter
      const matchesCarModel = !carModel || part.compatibleCars.some(car =>
        car.toLowerCase().includes(carModel.toLowerCase())
      );

      return matchesSearch && matchesCategory && matchesPrice && matchesCarModel;
    });
  }, [searchTerm, selectedCategory, priceRange, carModel]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange('all');
    setCarModel('');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-automotive-dark mb-4">
            Browse Spare Parts
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the perfect parts for your vehicle from our extensive catalog
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search & Filter Parts
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="space-y-2">
              <Label htmlFor="search">Search Parts</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by part name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
              {/* Category Filter */}
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <Label>Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-50">Under $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100-200">$100 - $200</SelectItem>
                    <SelectItem value="over-200">Over $200</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Car Model Filter */}
              <div className="space-y-2">
                <Label htmlFor="carModel">Car Model</Label>
                <Input
                  id="carModel"
                  placeholder="Enter car model..."
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                />
              </div>

              {/* Clear Filters */}
              <div className="space-y-2">
                <Label>&nbsp;</Label>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredParts.length} of {spareParts.length} parts
          </p>
        </div>

        {/* Parts Grid */}
        {filteredParts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredParts.map((part, index) => (
              <div key={part.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <PartCard part={part} />
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="space-y-4">
                <Search className="h-16 w-16 text-muted-foreground mx-auto" />
                <h3 className="text-xl font-semibold text-automotive-dark">No Parts Found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any parts matching your search criteria. 
                  Try adjusting your filters or search terms.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BrowseParts;