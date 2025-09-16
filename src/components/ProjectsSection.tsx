import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

// Define a type for our projects
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  fullImage: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform for a local fashion brand with payment integration.',
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    thumbnail: '/projects/placeholder.svg',
    fullImage: '/projects/placeholder.svg'
  },
  {
    id: 2,
    title: 'Health Tracking App',
    description: 'Mobile app for tracking health metrics with data visualization dashboard.',
    techStack: ['React Native', 'Node.js', 'Express', 'Chart.js'],
    thumbnail: '/projects/placeholder.svg',
    fullImage: '/projects/placeholder.svg'
  },
  {
    id: 3,
    title: 'Financial Management Dashboard',
    description: 'Interactive dashboard for small businesses to track expenses and revenue.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Material UI'],
    thumbnail: '/projects/placeholder.svg',
    fullImage: '/projects/placeholder.svg'
  },
  {
    id: 4,
    title: 'Property Listing Platform',
    description: 'Real estate platform with advanced search and filtering capabilities.',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Google Maps API'],
    thumbnail: '/projects/placeholder.svg',
    fullImage: '/projects/placeholder.svg'
  }
];

export default function ProjectsSection() {
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-64 relative">
        <Image 
          src={project.thumbnail}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          // Using a temporary solution until real images are added
          unoptimized
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-800 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">View Project</Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xl w-full">
            <SheetHeader>
              <SheetTitle>{project.title}</SheetTitle>
              <SheetDescription>{project.description}</SheetDescription>
            </SheetHeader>
            <div className="mt-6 h-80 relative">
              <Image
                src={project.fullImage}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
                // Using a temporary solution until real images are added
                unoptimized
              />
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
}
