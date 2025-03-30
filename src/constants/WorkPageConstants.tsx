export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Management App",
    description: "A full-stack project management application with real-time updates and team collaboration features.",
    imageUrl: "/images/projects/project-management.jpg",
    githubUrl: "https://github.com/yourusername/project-management",
    demoUrl: "https://project-management-demo.com",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "An e-commerce platform with shopping cart, user authentication, and payment integration.",
    imageUrl: "/images/projects/ecommerce.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and responsive design.",
    imageUrl: "/images/projects/portfolio.jpg",
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://portfolio-demo.com",
    technologies: ["React", "TypeScript", "SCSS"]
  }
]; 