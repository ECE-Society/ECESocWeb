import { getAllBlogs } from "@/modules/blogs/lib/data";
import { BlogsClient } from "./blogs-client";

export default function BlogListingPage() {
  const posts = getAllBlogs();
  return <BlogsClient posts={posts} />;
}