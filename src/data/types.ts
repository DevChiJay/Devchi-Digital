// Define a type for our projects
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  fullImage: string;
  url: string;
}