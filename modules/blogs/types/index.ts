export interface BlogPost {
  id: string;      // Unique slug for routing
  title: string;
  date: string;
  tags: string[];    // Array of strings for the bottom chips
  excerpt: string; // Preview text
  content: string; // Full body content (Raw Markdown string)
  image?: string; // Local image path
  contributors?: string[]; // Array of contributor names
}
