import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Pet Street, Animal City, AC 12345",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@petmania.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat: 9AM - 8PM",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            📞 Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our pets or services? We'd love to hear from
            you. Reach out to us anytime!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 h-48 bg-gradient-to-br from-muted to-card rounded-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card p-8 rounded-3xl shadow-medium">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="h-12 rounded-xl border-border focus:border-primary"
                    />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="h-12 rounded-xl border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about the pet you're looking for..."
                    className="min-h-[120px] rounded-xl border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
