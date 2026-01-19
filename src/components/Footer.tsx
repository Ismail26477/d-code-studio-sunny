import { motion } from "framer-motion";
import {
  PawPrint,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart,
} from "lucide-react";

const footerLinks = {
  "Quick Links": ["Home", "About Us", "Our Pets", "Services", "Contact"],
  "Pet Categories": ["Dogs", "Cats", "Birds", "Rabbits", "Fish", "Hamsters"],
  Services: [
    "Pet Grooming",
    "Veterinary Care",
    "Pet Training",
    "Pet Boarding",
    "Pet Delivery",
  ],
  Support: ["FAQs", "Shipping Policy", "Return Policy", "Privacy Policy", "Terms of Service"],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a href="#home" className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <PawPrint className="w-10 h-10 text-primary" />
              </motion.div>
              <span className="text-2xl font-heading font-bold">Pet Mania</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted partner in finding the perfect furry, feathery, or
              scaly companion. We're committed to connecting pets with loving
              families.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-heading font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-primary-foreground/70 hover:text-primary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/10 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-bold text-xl mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-primary-foreground/70">
                Get updates on new pets and exclusive offers!
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 h-12 px-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-12 px-6 bg-gradient-primary text-primary-foreground rounded-xl font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/10 pt-8 text-center"
        >
          <p className="text-primary-foreground/70 flex items-center justify-center gap-2">
            © 2024 Pet Mania. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.span>{" "}
            for pet lovers everywhere.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
