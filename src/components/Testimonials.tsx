import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Dog Owner",
    content:
      "Pet Mania helped me find my perfect companion. The process was smooth, and the team was incredibly supportive throughout!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Michael Chen",
    role: "Cat Parent",
    content:
      "Amazing experience! My kitten came healthy and happy. The health certificate and vaccination records were all in order.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Emily Davis",
    role: "Bird Enthusiast",
    content:
      "The best pet store I've ever dealt with. Their knowledge about bird care is exceptional. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What Our <span className="text-gradient">Happy Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied pet parents who found their perfect
            companions through Pet Mania.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-muted"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
