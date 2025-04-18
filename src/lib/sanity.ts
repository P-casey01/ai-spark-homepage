
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Replace with your Sanity project ID and dataset
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-04-18'; // Use today's date or later

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set this to false if you want to ensure fresh data
  // Add CORS origins when ready:
  // useCdn: true,
  // cors: {
  //   allowOrigins: ['http://localhost:8080', 'your-production-url.com']
  // }
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// TypeScript interface for BlogPost
export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  heroImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  body: any; // This will be Portable Text
  publishedAt: string;
  tags: string[];
}

// GROQ Queries
export const getAllPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    heroImage,
    publishedAt,
    tags
  }
`;

export const getPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    heroImage,
    body,
    publishedAt,
    tags
  }
`;

// Helper functions to fetch data
export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(getAllPostsQuery);
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  return client.fetch(getPostBySlugQuery, { slug });
}
