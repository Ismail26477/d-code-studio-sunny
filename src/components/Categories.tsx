import { motion } from "framer-motion";
import { Dog, Cat, Bird, Rabbit } from "lucide-react";
import dogGolden from "@/assets/dog-golden.jpg";
import catOrange from "@/assets/cat-orange.jpg";
import parrot from "@/assets/parrot.jpg";
import bunny from "@/assets/bunny.jpg";

const categories = [
  {
    name: "Dogs",
    icon: Dog,
    count: 150,
    image: dogGolden,
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Cats",
    icon: Cat,
    count: 120,
    image: catOrange,
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Birds",
    icon: Bird,
    count: 80,
    image: parrot,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Rabbits",
    icon: Rabbit,
    count: 45,
    image: bunny,
    color: "from-blue-400 to-cyan-500",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            Browse by Category
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Find Your <span className="text-gradient">Perfect Pet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide variety of adorable pets across different
            categories. Each one is looking for a loving home.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-card shadow-soft hover:shadow-large transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-30 group-hover:opacity-40 transition-opacity`}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.count} pets available
                      </p>
                    </div>
                    <motion.div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-medium`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  initial={false}
                >
                  <div className="p-6 text-primary-foreground">
                    <p className="font-semibold">View All {category.name} →</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
