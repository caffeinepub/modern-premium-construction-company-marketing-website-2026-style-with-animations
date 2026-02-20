import { useEffect, RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useParallax(ref: RefObject<HTMLElement | null>, speed: number = 0.5) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const scrolled = window.scrollY;
            const yPos = -(scrolled * speed);
            ref.current.style.transform = `translateY(${yPos}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed, prefersReducedMotion]);
}
