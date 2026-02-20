import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  project: Project;
}

export function LightboxModal({ isOpen, onClose, onNext, onPrevious, project }: LightboxModalProps) {
  const modalRef = useFocusTrap(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative z-10 max-w-6xl w-full mx-4 bg-card rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-charcoal/50 hover:bg-charcoal text-white rounded-full"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Navigation Buttons */}
        <Button
          onClick={onPrevious}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-charcoal/50 hover:bg-charcoal text-white rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={onNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-charcoal/50 hover:bg-charcoal text-white rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Image */}
        <div className="aspect-video bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Project Info */}
        <div className="p-8">
          <div className="text-construction-yellow text-sm font-semibold mb-2">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
