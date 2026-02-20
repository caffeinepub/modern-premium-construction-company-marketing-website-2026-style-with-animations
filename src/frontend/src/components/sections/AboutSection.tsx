import { Reveal } from '@/components/motion/Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side with Overlapping Effect */}
          <Reveal direction="left">
            <div className="relative">
              {/* Accent Block */}
              <div className="absolute -left-4 -top-4 w-full h-full bg-construction-yellow/20 rounded-2xl" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/about-team.dim_1400x1000.png"
                  alt="Our construction team"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-charcoal text-white p-6 rounded-xl shadow-xl border border-construction-yellow/30">
                <div className="text-4xl font-bold text-construction-yellow">30+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </Reveal>

          {/* Text Side */}
          <Reveal direction="right" delay={0.2}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Building Excellence Since 1995
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a leading construction company dedicated to transforming visions into reality. 
                With over three decades of experience, we've built a reputation for delivering projects 
                that exceed expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of skilled professionals combines traditional craftsmanship with cutting-edge 
                technology to ensure every project is completed on time, within budget, and to the 
                highest standards of quality.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-construction-yellow mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-construction-yellow mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
