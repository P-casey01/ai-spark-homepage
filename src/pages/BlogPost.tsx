
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Article = {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  summary: string;
};

const BlogPost = () => {
  const { slug } = useParams();

  const { data: article, isLoading, error } = useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) {
        throw error;
      }

      return data;
    }
  });

  // Handle error outside of the query options
  if (error) {
    toast.error("Failed to load article", {
      description: error instanceof Error ? error.message : "Unknown error"
    });
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to blog
            </Link>
          </Button>
        </div>
        <Skeleton className="w-full h-64 rounded-lg mb-8" />
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/4 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <CalendarIcon className="h-5 w-5 mr-2" />
        <span>{format(new Date(article.created_at), "MMMM d, yyyy")}</span>
      </div>
      <div 
        className="prose max-w-none" 
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </div>
  );
};

export default BlogPost;
