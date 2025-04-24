import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        className="text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-foreground mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! Page not found
        </motion.p>
        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-x-4"
        >
          <Button asChild>
            <Link to="/" className="text-white">
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
        <motion.div 
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="mb-2">Or explore other sections:</p>
          <div className="flex justify-center space-x-4">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
