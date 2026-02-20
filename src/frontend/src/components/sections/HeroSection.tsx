import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollToSection';
import { useParallax } from '@/hooks/useParallax';
import { Reveal } from '@/components/motion/Reveal';

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  useParallax(parallaxRef, 0.5);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/assets/generated/construction-hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal delay={0.2}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Building the Future with<br />
            <span className="text-construction-yellow">Strength & Precision</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Delivering exceptional construction solutions with unmatched quality and expertise since 1995
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-construction-yellow text-charcoal hover:bg-construction-yellow/90 font-bold text-lg px-8 py-6 h-auto"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-bold text-lg px-8 py-6 h-auto"
            >
              View Projects
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
