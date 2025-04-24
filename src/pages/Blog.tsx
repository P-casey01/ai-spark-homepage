import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";
import staticArticles from "@/content/staticArticles";

const Blog = () => {
  // Featured article is the most recent one
  const featuredArticle = staticArticles[0];
  // Slice from the second article up to (but not including) the last one
  const remainingArticles = staticArticles.slice(1, -1); 

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-12 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engineering Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights and deep dives into web development, AI, and automation
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Link to={`/blog/${featuredArticle.slug}`} className="block group">
            <Card className="overflow-hidden border-none bg-transparent shadow-none">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-xl bg-muted">
                  {featuredArticle.image_url && (
                    <img
                      src={featuredArticle.image_url}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight transition-colors group-hover:text-primary">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {featuredArticle.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(new Date(featuredArticle.created_at), 'MMMM d, yyyy')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {calculateReadTime(featuredArticle.content)} min read
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {remainingArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${article.slug}`}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    {article.image_url ? (
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <span className="text-muted-foreground">No image available</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(new Date(article.created_at), 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {calculateReadTime(article.content)} min read
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold tracking-tight line-clamp-2 transition-colors hover:text-primary">
                        {article.title}
                      </h2>
                      <p className="line-clamp-3 text-muted-foreground">
                        {article.summary}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
