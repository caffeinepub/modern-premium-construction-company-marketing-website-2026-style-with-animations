import { Award, Clock, Shield, Users } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { useRef } from 'react';

const reasons = [
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description: 'Recognized for excellence in construction and design',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Committed to meeting deadlines without compromising quality',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Industry-leading safety standards on every project',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with decades of combined experience',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 150, suffix: '+', label: 'Team Members' },
];

export function WhyChooseUsSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewOnce(statsRef);

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with industry leaders
            </p>
          </div>
        </Reveal>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-construction-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-10 h-10 text-construction-yellow" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Counter */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-construction-yellow mb-2">
                  <CounterDisplay
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterDisplay({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const count = useCountUp(value, isInView);
  return <>{count}{suffix}</>;
}
