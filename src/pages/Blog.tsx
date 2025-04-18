
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";

type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  created_at: string;
  slug: string;
};

// Static blog posts data
const staticArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    summary: "Learn the basics of web development and how to build your first website.",
    content: "Full content of the article goes here...",
    image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
    created_at: "2025-04-18T10:00:00Z",
    slug: "getting-started-with-web-development"
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    summary: "Deep dive into React Hooks and how they can improve your components.",
    content: "Full content about React Hooks...",
    image_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    created_at: "2025-04-17T10:00:00Z",
    slug: "understanding-react-hooks"
  },
  {
    id: "3",
    title: "Modern CSS Techniques",
    summary: "Explore modern CSS techniques and best practices for web design.",
    content: "Full content about CSS techniques...",
    image_url: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500",
    created_at: "2025-04-16T10:00:00Z",
    slug: "modern-css-techniques"
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticArticles.map((article) => (
          <Link key={article.id} to={`/blog/${article.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{format(new Date(article.created_at), "MMMM d, yyyy")}</span>
                </div>
                <p className="line-clamp-3 text-gray-600">{article.summary}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
