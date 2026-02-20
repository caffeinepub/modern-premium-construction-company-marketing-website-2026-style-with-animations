import { useEffect, useState, RefObject } from 'react';

export function useInViewOnce(ref: RefObject<HTMLElement | null>, threshold: number = 0.1): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, isInView]);

  return isInView;
}
