import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { theme } = useTheme();
  
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+44 7783904804",
      link: "tel:+4407783904804"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "Piaras@auto-mateconsultants.co.uk",
      link: "mailto:Piaras@auto-mateconsultants.co.uk"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "12 Mansefield Grove",
      link: "https://maps.google.com/?q=12+mansefield+grove"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to discuss your automation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                href={item.link}
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800' 
                    : 'bg-white shadow-md hover:shadow-lg'
                } transition-all duration-300`}
              >
                <div className="flex flex-col items-center">
                  <div className={`mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.details}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`rounded-xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                : 'bg-white shadow-md'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <Button 
                  className={`${
                    theme === 'dark'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-green-700 hover:bg-green-800'
                  } text-white px-8`}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Image optimization: add width/height to images in contact cards if any are added in the future.
// Performance: React.memo can be used for Contact if props are added in the future.

export default Contact;
