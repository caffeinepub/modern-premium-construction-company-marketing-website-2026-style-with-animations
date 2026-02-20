import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { LightboxModal } from '@/components/modals/LightboxModal';

const projects = [
  {
    id: 1,
    title: 'Modern Commercial Complex',
    category: 'Commercial',
    image: '/assets/generated/project-01.dim_1200x900.png',
    description: 'A state-of-the-art commercial building featuring sustainable design and modern amenities.',
  },
  {
    id: 2,
    title: 'Steel Bridge Construction',
    category: 'Infrastructure',
    image: '/assets/generated/project-02.dim_1200x900.png',
    description: 'Major infrastructure project showcasing our expertise in large-scale construction.',
  },
  {
    id: 3,
    title: 'Luxury Interior Fit-Out',
    category: 'Interior',
    image: '/assets/generated/project-03.dim_1200x900.png',
    description: 'Premium interior construction with high-end finishes and attention to detail.',
  },
  {
    id: 4,
    title: 'Residential Development',
    category: 'Residential',
    image: '/assets/generated/project-04.dim_1200x900.png',
    description: 'Modern residential community built with quality and sustainability in mind.',
  },
  {
    id: 5,
    title: 'Industrial Facility',
    category: 'Industrial',
    image: '/assets/generated/project-05.dim_1200x900.png',
    description: 'Large-scale industrial construction project completed ahead of schedule.',
  },
  {
    id: 6,
    title: 'Construction Details',
    category: 'Craftsmanship',
    image: '/assets/generated/project-06.dim_1200x900.png',
    description: 'Showcasing our commitment to precision and quality in every detail.',
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    if (selectedProject !== null) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex].id);
    }
  };

  const handlePrevious = () => {
    if (selectedProject !== null) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex].id);
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful construction projects
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-construction-yellow text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProjectData && (
        <LightboxModal
          isOpen={!!selectedProject}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
          project={selectedProjectData}
        />
      )}
    </section>
  );
}
