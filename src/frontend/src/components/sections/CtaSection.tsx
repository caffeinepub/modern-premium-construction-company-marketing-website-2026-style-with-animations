import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';
import { Mail, Phone, MapPin } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, currentColor 48%, currentColor 52%, transparent 52%)',
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-white/80 mb-8">
              Let's bring your vision to life. Contact us today for a free consultation and quote.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Button
              size="lg"
              className="bg-construction-yellow text-charcoal hover:bg-construction-yellow/90 font-bold text-lg px-12 py-6 h-auto"
            >
              Get Your Free Quote
            </Button>
          </Reveal>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 bg-construction-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-construction-yellow" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="text-center">
              <div className="w-16 h-16 bg-construction-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-construction-yellow" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-white/70">info@buildco.com</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="text-center">
              <div className="w-16 h-16 bg-construction-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-construction-yellow" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-white/70">123 Construction Ave, City, ST 12345</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
