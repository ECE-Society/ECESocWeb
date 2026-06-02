import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '../types';

const contentDir = path.join(process.cwd(), 'content', 'blogs');

// Define the exact chronological order for the Blogs page
const orderedIds = [
  "ai-impact-summit-2026",
  "aesa-revolution",
  "dhruv64-milestone",
  "optimus-gen-2",
  "attention-paper",
  "6g-networks-vision",
  "ai-in-chip-design",
  "semiconductor-manufacturing"
];

// Define the mixed order specifically for the Home page fan layout (7 items)
const homeOrderedIds = [
  "attention-paper",
  "dhruv64-milestone",
  "ai-in-chip-design",
  "semiconductor-manufacturing",
  "optimus-gen-2",
  "aesa-revolution",
  "ai-impact-summit-2026",
];

export function getAllBlogs(): BlogPost[] {
  const posts: BlogPost[] = [];

  // Read posts in the exact chronological order
  for (const id of orderedIds) {
    const post = getBlogById(id);
    if (post) {
      posts.push(post);
    }
  }

  return posts;
}

export function getHomeBlogs(): BlogPost[] {
  const posts: BlogPost[] = [];

  // Read posts in the custom mixed order for the home page
  for (const id of homeOrderedIds) {
    const post = getBlogById(id);
    if (post) {
      posts.push(post);
    }
  }

  return posts;
}

export function getBlogById(id: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt,
      image: data.image,
      contributors: data.contributors || [],
      content: content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}