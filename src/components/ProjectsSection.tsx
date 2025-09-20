"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { PinContainer } from '@/components/ui/Pin';
import { projects } from '@/data';
import { Project } from '@/data/types';

export default function ProjectsSection() {
  
  return (
    <section id='projects' className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Recent Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 xl:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="min-h-[480px] flex items-center justify-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <PinContainer title={project.title} className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]" containerClassName="h-full">
            <div className="w-full bg-white rounded-2xl overflow-hidden">
              <div className="h-40 relative">
                <Image 
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  // Using a temporary solution until real images are added
                  unoptimized
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-3">{project.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-xs font-medium text-gray-800 mb-1">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="w-full bg-gray-50 rounded-md px-3 py-2 text-xs text-center text-gray-500 mt-2">
                  Click to view details
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
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
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            onClick={() => window.open(project.url, '_blank')}
          >
            Visit Live Demo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
