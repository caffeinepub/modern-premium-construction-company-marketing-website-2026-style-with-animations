import { Building2, Hammer, HardHat, Home, Wrench, Ruler } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Large-scale commercial projects including offices, retail spaces, and industrial facilities.',
  },
  {
    icon: Home,
    title: 'Residential Building',
    description: 'Custom homes and residential developments built with precision and care.',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with our expert renovation and remodeling services.',
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description: 'Comprehensive project management ensuring timely delivery and quality control.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description: 'Ongoing maintenance and support to keep your property in top condition.',
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    description: 'Expert architectural design and planning services for your construction needs.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique needs
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border hover:border-construction-yellow/50">
                <div className="w-16 h-16 bg-construction-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-construction-yellow/20 transition-colors">
                  <service.icon className="w-8 h-8 text-construction-yellow" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
