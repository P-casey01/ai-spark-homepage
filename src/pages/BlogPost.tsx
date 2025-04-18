
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useTheme } from "@/hooks/use-theme";

type Article = {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  summary: string;
  slug: string;
};

// Static blog posts data - same as in Blog.tsx
const staticArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    summary: "Learn the basics of web development and how to build your first website.",
    content: `
      <h2>Introduction to Web Development</h2>
      <p>Web development is an exciting field that combines creativity with technical skills. In this article, we'll explore the fundamentals of web development and guide you through building your first website.</p>
      
      <h3>The Basic Technologies</h3>
      <ul>
        <li>HTML - For structuring content</li>
        <li>CSS - For styling and layout</li>
        <li>JavaScript - For interactivity and dynamic features</li>
      </ul>
      
      <p>Getting started with web development can seem overwhelming at first, but with the right approach and resources, anyone can learn to build websites.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
    created_at: "2025-04-18T10:00:00Z",
    slug: "getting-started-with-web-development"
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    summary: "Deep dive into React Hooks and how they can improve your components.",
    content: `
      <h2>React Hooks Explained</h2>
      <p>React Hooks have revolutionized how we write React components. They allow you to use state and other React features without writing a class component.</p>
      
      <h3>Common Hooks</h3>
      <ul>
        <li>useState - For managing component state</li>
        <li>useEffect - For side effects</li>
        <li>useContext - For consuming context</li>
      </ul>
      
      <p>Hooks make it easier to reuse stateful logic between components and make components easier to understand.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    created_at: "2025-04-17T10:00:00Z",
    slug: "understanding-react-hooks"
  },
  {
    id: "3",
    title: "Modern CSS Techniques",
    summary: "Explore modern CSS techniques and best practices for web design.",
    content: `
      <h2>Modern CSS Development</h2>
      <p>CSS has evolved significantly over the years, offering powerful features for creating responsive and attractive web designs.</p>
      
      <h3>Key Modern Features</h3>
      <ul>
        <li>CSS Grid and Flexbox</li>
        <li>CSS Custom Properties (Variables)</li>
        <li>Modern Selectors and Pseudo-classes</li>
      </ul>
      
      <p>Understanding these modern CSS features can significantly improve your web development workflow.</p>
    `,
    image_url: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
    created_at: "2025-04-16T10:00:00Z",
    slug: "modern-css-techniques"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const article = staticArticles.find(a => a.slug === slug);
  const { theme } = useTheme();

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl bg-background text-foreground transition-colors duration-200">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to blog
            </Link>
          </Button>
        </div>
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Article not found</AlertTitle>
          <AlertDescription>The article you're looking for doesn't exist or has been removed.</AlertDescription>
        </Alert>
        <div className="text-center py-8">
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-background text-foreground transition-colors duration-200">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/blog" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to blog
          </Link>
        </Button>
      </div>
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4 text-foreground">{article.title}</h1>
      <div className="flex items-center text-muted-foreground mb-8">
        <CalendarIcon className="h-5 w-5 mr-2" />
        <span>{format(new Date(article.created_at), "MMMM d, yyyy")}</span>
      </div>
      <div 
        className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </div>
  );
};

export default BlogPost;
