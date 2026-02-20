export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const navbarHeight = 80; // Height of sticky navbar
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });

  // Set focus for accessibility
  setTimeout(() => {
    element.focus({ preventScroll: true });
  }, 500);
}
