import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/button';
import { useCarousel } from '@/hooks/useCarousel';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'BuildCo transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and delivered on time.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Developer',
    content: 'Working with BuildCo was an absolute pleasure. Their expertise in commercial construction is unmatched. They handled every challenge with professionalism and delivered exceptional results.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    content: 'Our dream home became a reality thanks to BuildCo. From design to completion, they guided us through every step. The craftsmanship is outstanding, and we couldn\'t be happier.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { activeIndex, next, previous, goTo, handlers } = useCarousel(testimonials.length);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative" {...handlers}>
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border">
                      <Quote className="w-12 h-12 text-construction-yellow mb-6" />
                      <p className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-construction-yellow/20 rounded-full flex items-center justify-center text-construction-yellow font-bold text-xl mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={previous}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-card hover:bg-construction-yellow hover:text-charcoal border-border"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-card hover:bg-construction-yellow hover:text-charcoal border-border"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-construction-yellow w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
