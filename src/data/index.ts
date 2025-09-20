import { Project } from "./types";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  GitBranch,
  Server,
  Award,
  Users,
  Star,
  Code,
  TrendingUp,
} from "lucide-react";

// Sample projects data
export const projects: Project[] = [
  {
    id: 1,
    title: 'Calculate.ng',
    description: 'Your comprehensive Nigerian calculator suite featuring BMI, Tax, and Inflation calculators. Simplifying complex calculations for everyday Nigerians.',
    techStack: ['Next.js', 'Tailwind CSS', 'Typescript', 'Framer motion'],
    thumbnail: '/projects/calculate.png',
    fullImage: '/projects/calculate.png',
    url: 'https://calculate.ng'
  },
  {
    id: 2,
    title: 'Capp.to',
    description: 'The ultimate modern URL shortener with instant QR code generation!  Simplify your links and track clicks with ease.',
    techStack: ['Next.js', 'Node.js', 'Tailwind CSS', 'Typescript'],
    thumbnail: '/projects/capp.png',
    fullImage: '/projects/capp.png',
    url: 'https://capp.to'
  },
  {
    id: 3,
    title: 'Zentry Animated Landing Page',
    description: 'A landing page for Zentry, a web3 project, featuring GSAP animations and a modern design.',
    techStack: ['React', 'Tailwind CSS', 'GSap', 'Framer motion'],
    thumbnail: '/projects/awwards.png',
    fullImage: '/projects/awwards.png',
    url: 'https://zentry-awards.web.app/'
  },
  {
    id: 4,
    title: 'API Management Portal',
    description: 'A web-based API management portal built with Next.js and Tailwind CSS.',
    techStack: ['Node.js', 'Next.js', 'MongoDB', 'Typescript'],
    thumbnail: '/projects/portal.png',
    fullImage: '/projects/portal.png',
    url: 'https://portal.devchihub.com/'
  }
];

export const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "PHP",
      "REST APIs",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Progressive Web Apps",
    ],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "AWS",
      "Google Cloud",
      "Docker",
    ],
  },
  {
    category: "Tools & Others",
    icon: GitBranch,
    skills: [
      "Git & GitHub",
      "VS Code",
      "Cursor",
      "Github Copilot",
      "Webpack",
      "Vite",
      "Jest",
    ],
  },
  {
    category: "SEO & Marketing",
    icon: Globe,
    skills: [
      "Technical SEO",
      "Google Analytics",
      "Search Console",
      "Page Speed Optimization",
      "Social Media Marketing",
      "Content Strategy",
    ],
  },
];

export const achievements = [
  {
    icon: Award,
    title: "50+ Projects Completed",
    description: "Successfully delivered web and mobile applications",
  },
  {
    icon: Users,
    title: "30+ Happy Clients",
    description: "Satisfied clients across various industries",
  },
  {
    icon: Star,
    title: "5+ Years Experience",
    description: "Expertise in modern web and mobile technologies",
  },
  {
    icon: Globe,
    title: "SEO Specialist",
    description: "Helped businesses rank higher on search engines",
  },
];

export const experience = [
  {
    period: "2020 - Present",
    role: "Founder & Lead Developer",
    company: "Devchi Digital Ltd",
    description: "Founded and built a software company specializing in web development, mobile apps, and custom APIs integration. Led numerous projects from concept to deployment.",
  },
  {
    period: "2022 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: "Worked with various clients to build custom web applications, e-commerce platforms, and mobile apps using modern technologies.",
  },
  {
    period: "2019 - 2022",
    role: "Junior Web Developer",
    company: "Chimaco Tech",
    description: "Developed responsive web applications and improved user experience for a growing tech startup.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Michael Obinna",
    company: "Macorn Solutions Ltd",
    role: "Senior Developer Advocate",
    content: "Working with Devchi Digital was a game-changer. He understood my requirements perfectly and built a seamless solution with excellent UI/UX. Professional, reliable, and highly skilled!",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Cynthia Hilary",
    company: "Matt-Hilary Enterprises",
    role: "Marketing Director", 
    content: "If you need a developer team who truly understands modern web technologies, Devchi Digital is the place. They built a custom solution tailored to my needs, and the end result was flawless!",
    rating: 5,
    image: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Lawrence Chukwudi",
    company: "Nonseman Technology",
    role: "Founder",
    content: "Superb developer! Dev Chi optimized my website’s performance and improved load times significantly. He’s efficient, knowledgeable, and always delivers high-quality work.",
    rating: 5,
    image: "/api/placeholder/60/60"
  }
];


export const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies, responsive design, and optimized for performance.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100"
  },
  {
    icon: Code,
    title: "Custom API",
    description: "Tailored API development for seamless integration between your systems and third-party services.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Authentication & Security"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100"
  },
  {
    icon: TrendingUp,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage AI and machine learning to automate processes and gain insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Solutions"],
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100"
  }
];