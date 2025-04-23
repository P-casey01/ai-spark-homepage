import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { getAllPosts, BlogPost, urlFor } from "@/lib/sanity";
import staticArticles, { Article } from "@/content/staticArticles";

// Type guard to check if an article is a Sanity post
function isSanityPost(article: BlogPost | Article): article is BlogPost {
  return (article as BlogPost).slug !== undefined && typeof (article as BlogPost).slug !== 'string';
}

const Blog = () => {
  const { theme } = useTheme();
  const [sanityPosts, setSanityPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllPosts()
      .then((posts) => setSanityPosts(posts))
      .catch((err) => setError("Failed to load blog posts."))
      .finally(() => setLoading(false));
  }, []);

  // Merge static and sanity posts, keeping static first for SEO
  const allArticles = [
    ...staticArticles,
    ...sanityPosts.filter(
      (sp) => !staticArticles.some((sa) => sa.slug === (sp.slug && typeof sp.slug === 'object' ? sp.slug.current : sp.slug))
    ),
  ];

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 bg-background text-foreground transition-colors duration-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Blog
      </motion.h1>
      {loading && <div>Loading blog posts...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArticles.map((article, index) => {
          if (isSanityPost(article)) {
            const slug = article.slug.current;
            const image = article.heroImage ? urlFor(article.heroImage).width(800).height(400).url() : undefined;
            const title = article.title;
            const summary = article.excerpt;
            const date = article.publishedAt;
            return (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link to={`/blog/${slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card text-card-foreground">
                    {image && (
                      <img
                        src={image}
                        alt={title}
                        width={800}
                        height={192}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{format(new Date(date), "MMMM d, yyyy")}</span>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">{summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          } else {
            // Static article
            const slug = article.slug;
            const image = article.image_url;
            const title = article.title;
            const summary = article.summary;
            const date = article.created_at;
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link to={`/blog/${slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow bg-card text-card-foreground">
                    {image && (
                      <img
                        src={image}
                        alt={title}
                        width={800}
                        height={192}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{format(new Date(date), "MMMM d, yyyy")}</span>
                      </div>
                      <p className="line-clamp-3 text-muted-foreground">{summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

export default Blog;
