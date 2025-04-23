// Static blog posts data for Blog page
export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string | null;
  created_at: string;
  slug: string;
};

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

export default staticArticles;
