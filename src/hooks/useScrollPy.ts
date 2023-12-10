import { useEffect } from 'react'

export const useScrollPy = ({ setActiveSection }: { setActiveSection: (value: number) => void }) => {
  const handleScroll = () => {
    const sectionElements = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sectionElements.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition <= bottom) {
        setActiveSection(parseInt((section.id[section.id.length - 1])));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
