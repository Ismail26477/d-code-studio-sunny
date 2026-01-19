import { motion } from "framer-motion";
import { Check, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.jpg";

const features = [
  "100% Health Guaranteed Pets",
  "Complete Vaccination Records",
  "24/7 Customer Support",
  "Free Vet Consultation",
  "Safe Home Delivery",
  "30-Day Return Policy",
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Families" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src={heroPets}
                alt="About Pet Mania"
                className="w-full rounded-3xl shadow-large"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-6 rounded-3xl shadow-large"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <span className="block text-4xl font-bold">15+</span>
                  <span className="text-sm opacity-90">Years of Trust</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              🏆 About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose{" "}
              <span className="text-gradient">Pet Mania</span>?
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Pet Mania, we believe every pet deserves a loving home. With
              over 15 years of experience, we've helped thousands of families
              find their perfect companions. Our commitment to pet health,
              customer satisfaction, and ethical breeding practices sets us
              apart.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="xl">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
