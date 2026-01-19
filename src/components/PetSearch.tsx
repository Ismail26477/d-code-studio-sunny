import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, MapPin, Calendar, Filter, X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";
import dogHusky from "@/assets/dog-husky.jpg";
import catGray from "@/assets/cat-gray.jpg";
import bunny from "@/assets/bunny.jpg";
import hamster from "@/assets/hamster.jpg";
import parrot from "@/assets/parrot.jpg";

const allPets = [
  { id: 1, name: "Buddy", breed: "Golden Retriever", category: "Dogs", age: "3 months", ageMonths: 3, location: "New York", price: 850, image: dogGolden, gender: "Male" },
  { id: 2, name: "Whiskers", breed: "Orange Tabby", category: "Cats", age: "4 months", ageMonths: 4, location: "Los Angeles", price: 450, image: catOrange, gender: "Female" },
  { id: 3, name: "Luna", breed: "Siberian Husky", category: "Dogs", age: "2 months", ageMonths: 2, location: "Chicago", price: 1200, image: dogHusky, gender: "Female" },
  { id: 4, name: "Smokey", breed: "British Shorthair", category: "Cats", age: "5 months", ageMonths: 5, location: "Houston", price: 600, image: catGray, gender: "Male" },
  { id: 5, name: "Cotton", breed: "Holland Lop", category: "Small Pets", age: "6 months", ageMonths: 6, location: "Miami", price: 150, image: bunny, gender: "Female" },
  { id: 6, name: "Nugget", breed: "Syrian Hamster", category: "Small Pets", age: "3 months", ageMonths: 3, location: "Seattle", price: 25, image: hamster, gender: "Male" },
  { id: 7, name: "Max", breed: "German Shepherd", category: "Dogs", age: "4 months", ageMonths: 4, location: "Boston", price: 950, image: dogGolden, gender: "Male" },
  { id: 8, name: "Milo", breed: "Persian Cat", category: "Cats", age: "8 months", ageMonths: 8, location: "Denver", price: 800, image: catGray, gender: "Male" },
  { id: 9, name: "Rio", breed: "Macaw Parrot", category: "Birds", age: "12 months", ageMonths: 12, location: "Phoenix", price: 2500, image: parrot, gender: "Male" },
  { id: 10, name: "Daisy", breed: "Beagle", category: "Dogs", age: "5 months", ageMonths: 5, location: "Atlanta", price: 700, image: dogGolden, gender: "Female" },
  { id: 11, name: "Shadow", breed: "Maine Coon", category: "Cats", age: "7 months", ageMonths: 7, location: "San Francisco", price: 1100, image: catGray, gender: "Male" },
  { id: 12, name: "Coco", breed: "Mini Rex Rabbit", category: "Small Pets", age: "4 months", ageMonths: 4, location: "Portland", price: 120, image: bunny, gender: "Female" },
];

const locations = ["All Locations", "New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle", "Boston", "Denver", "Phoenix", "Atlanta", "San Francisco", "Portland"];
const categories = ["All Categories", "Dogs", "Cats", "Birds", "Small Pets"];
const ageRanges = ["All Ages", "0-3 months", "3-6 months", "6-12 months", "12+ months"];

const PetSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [selectedGender, setSelectedGender] = useState<"All" | "Male" | "Female">("All");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPets = useMemo(() => {
    return allPets.filter((pet) => {
      // Search query filter
      const matchesSearch =
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase());

      // Location filter
      const matchesLocation =
        selectedLocation === "All Locations" || pet.location === selectedLocation;

      // Category filter
      const matchesCategory =
        selectedCategory === "All Categories" || pet.category === selectedCategory;

      // Gender filter
      const matchesGender = selectedGender === "All" || pet.gender === selectedGender;

      // Price filter
      const matchesPrice = pet.price >= priceRange[0] && pet.price <= priceRange[1];

      // Age filter
      let matchesAge = true;
      if (selectedAge !== "All Ages") {
        if (selectedAge === "0-3 months") matchesAge = pet.ageMonths <= 3;
        else if (selectedAge === "3-6 months") matchesAge = pet.ageMonths > 3 && pet.ageMonths <= 6;
        else if (selectedAge === "6-12 months") matchesAge = pet.ageMonths > 6 && pet.ageMonths <= 12;
        else if (selectedAge === "12+ months") matchesAge = pet.ageMonths > 12;
      }

      return matchesSearch && matchesLocation && matchesCategory && matchesGender && matchesPrice && matchesAge;
    });
  }, [searchQuery, selectedLocation, selectedCategory, selectedGender, priceRange, selectedAge]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("All Locations");
    setSelectedCategory("All Categories");
    setSelectedAge("All Ages");
    setSelectedGender("All");
    setPriceRange([0, 3000]);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedLocation !== "All Locations" ||
    selectedCategory !== "All Categories" ||
    selectedAge !== "All Ages" ||
    selectedGender !== "All" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 3000;

  return (
    <section id="search" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            🔍 Find Your Perfect Pet
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Search & <span className="text-gradient">Discover</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our advanced filters to find your ideal companion. Filter by breed, age, price, gender, and location.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by pet name or breed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-32 py-6 text-lg rounded-2xl border-2 border-border focus:border-primary shadow-soft"
            />
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant={showFilters ? "default" : "outline"}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </motion.div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto mb-8 overflow-hidden"
            >
              <div className="bg-card rounded-3xl p-6 shadow-soft border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    Advanced Filters
                  </h3>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-destructive">
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Age Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Age Range</label>
                    <Select value={selectedAge} onValueChange={setSelectedAge}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ageRanges.map((age) => (
                          <SelectItem key={age} value={age}>{age}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Gender Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Gender</label>
                    <div className="flex gap-2">
                      {(["All", "Male", "Female"] as const).map((gender) => (
                        <motion.button
                          key={gender}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedGender(gender)}
                          className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                            selectedGender === gender
                              ? "bg-primary text-primary-foreground shadow-medium"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          {gender}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Range Slider */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-4 text-foreground">
                    Price Range: <span className="text-primary font-bold">${priceRange[0]}</span> - <span className="text-primary font-bold">${priceRange[1]}</span>
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={3000}
                    step={50}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto mb-6 flex items-center justify-between"
        >
          <p className="text-muted-foreground">
            Showing <span className="font-bold text-foreground">{filteredPets.length}</span> pets
            {hasActiveFilters && " matching your filters"}
          </p>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "All Categories" && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedCategory}
                </span>
              )}
              {selectedGender !== "All" && (
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                  {selectedGender}
                </span>
              )}
            </div>
          )}
        </motion.div>

        {/* Pet Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 border border-border">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Favorite Button */}
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-3 right-3 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>

                    {/* Gender Badge */}
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                        pet.gender === "Male"
                          ? "bg-accent text-accent-foreground"
                          : "bg-pink-500 text-white"
                      }`}
                    >
                      {pet.gender}
                    </span>

                    {/* Price Badge */}
                    <div className="absolute bottom-3 right-3 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-xl text-sm font-bold shadow-medium">
                      ${pet.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                      {pet.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{pet.breed}</p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span>{pet.age}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span>{pet.location}</span>
                      </div>
                    </div>

                    <Button variant="hero" size="sm" className="w-full">
                      Adopt Me
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredPets.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-heading font-bold mb-2">No pets found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PetSearch;
