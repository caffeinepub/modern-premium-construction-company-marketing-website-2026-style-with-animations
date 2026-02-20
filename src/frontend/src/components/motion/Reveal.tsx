import { useRef, ReactNode } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function Reveal({ children, direction = 'up', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewOnce(ref);
  const prefersReducedMotion = useReducedMotion();

  const getTransform = () => {
    if (prefersReducedMotion) return 'none';
    if (isInView) return 'none';
    
    switch (direction) {
      case 'up':
        return 'translateY(50px)';
      case 'down':
        return 'translateY(-50px)';
      case 'left':
        return 'translateX(50px)';
      case 'right':
        return 'translateX(-50px)';
      default:
        return 'translateY(50px)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: prefersReducedMotion ? 1 : (isInView ? 1 : 0),
        transition: prefersReducedMotion 
          ? 'none' 
          : `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
