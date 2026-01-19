import { motion } from "framer-motion";
import {
  Stethoscope,
  Scissors,
  Home,
  GraduationCap,
  Truck,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description:
      "Complete health checkups and vaccinations for your pets by certified veterinarians.",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    description:
      "Professional grooming services to keep your furry friends looking their best.",
    color: "from-purple-400 to-violet-500",
  },
  {
    icon: Home,
    title: "Pet Boarding",
    description:
      "Safe and comfortable boarding facilities when you're away from home.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Pet Training",
    description:
      "Expert training programs to help your pets learn good behavior and tricks.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Pet Delivery",
    description:
      "Safe and comfortable pet delivery service right to your doorstep.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: Heart,
    title: "Pet Insurance",
    description:
      "Comprehensive insurance plans to protect your beloved pets.",
    color: "from-pink-400 to-fuchsia-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            🎯 Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Complete <span className="text-gradient">Pet Care</span> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of services to ensure your pets live their
            happiest, healthiest lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 h-full border border-border/50 hover:border-primary/30">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-medium`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
