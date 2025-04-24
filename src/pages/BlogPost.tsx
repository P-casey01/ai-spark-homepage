import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "framer-motion";
import staticArticles from "@/content/staticArticles";
import { cn } from "@/lib/utils";

const BlogPost = () => {
  const { slug } = useParams();
  const article = staticArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertTitle>Post Not Found</AlertTitle>
            <AlertDescription>
              The blog post you're looking for doesn't exist. Please check the URL and try again.
            </AlertDescription>
          </Alert>
          <Button variant="ghost" className="mt-4" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Estimate read time (rough calculation)
  const wordsPerMinute = 200;
  const wordCount = article.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {article.image_url && (
        <motion.div
          className="w-full h-[50vh] relative bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background" />
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      <div className={cn(
        "container mx-auto px-4 relative",
        article.image_url ? "-mt-32 pt-0" : "pt-24"
      )}>
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" className="mb-8 hover:bg-accent" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 rounded-xl p-8 shadow-lg">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !mt-0 tracking-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(new Date(article.created_at), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {readTime} min read
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:scroll-mt-20
                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:leading-relaxed prose-p:mb-6
                prose-li:my-2
                prose-ul:my-8 prose-ul:space-y-2
                prose-a:text-primary hover:prose-a:text-primary/80
                prose-a:no-underline hover:prose-a:underline
                prose-strong:font-semibold
                prose-blockquote:border-l-primary
                prose-blockquote:not-italic
                prose-blockquote:text-muted-foreground
                prose-img:rounded-xl prose-img:shadow-lg
                [&>*:first-child]:mt-0
                [&>*:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;
