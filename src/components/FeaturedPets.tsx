import { motion } from "framer-motion";
import { Heart, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";
import dogHusky from "@/assets/dog-husky.jpg";
import catGray from "@/assets/cat-gray.jpg";
import bunny from "@/assets/bunny.jpg";
import hamster from "@/assets/hamster.jpg";

const pets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 months",
    location: "New York",
    price: 850,
    image: dogGolden,
    gender: "Male",
  },
  {
    id: 2,
    name: "Whiskers",
    breed: "Orange Tabby",
    age: "4 months",
    location: "Los Angeles",
    price: 450,
    image: catOrange,
    gender: "Female",
  },
  {
    id: 3,
    name: "Luna",
    breed: "Siberian Husky",
    age: "2 months",
    location: "Chicago",
    price: 1200,
    image: dogHusky,
    gender: "Female",
  },
  {
    id: 4,
    name: "Smokey",
    breed: "British Shorthair",
    age: "5 months",
    location: "Houston",
    price: 600,
    image: catGray,
    gender: "Male",
  },
  {
    id: 5,
    name: "Cotton",
    breed: "Holland Lop",
    age: "6 months",
    location: "Miami",
    price: 150,
    image: bunny,
    gender: "Female",
  },
  {
    id: 6,
    name: "Nugget",
    breed: "Syrian Hamster",
    age: "3 months",
    location: "Seattle",
    price: 25,
    image: hamster,
    gender: "Male",
  },
];

const FeaturedPets = () => {
  return (
    <section id="pets" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ✨ Featured Pets
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Meet Our <span className="text-gradient">Adorable Friends</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These lovely pets are ready to become part of your family. Each one
            comes with health certificates and complete vaccination records.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>

                  {/* Gender Badge */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      pet.gender === "Male"
                        ? "bg-accent text-accent-foreground"
                        : "bg-pink-500 text-white"
                    }`}
                  >
                    {pet.gender}
                  </span>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-2xl font-bold shadow-medium">
                    ${pet.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {pet.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{pet.breed}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{pet.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      Adopt Me
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="xl">
            View All Pets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPets;
