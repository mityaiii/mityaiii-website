import toggleDownValues from '../toggle-down-values'
import { socialLinkValues } from '../social-links/social-links.value'
import ToggleDown from '../toggle-down'
import { HeaderHero } from '../header-hero'
import SocialLink from '../social-links/social-link'
import { Logo } from '../logo'
import { useCallback, useEffect, useState } from 'react'

const dotPositions = [27, 159, 311];

const HeaderDesktop = () => {
  const [indxActive, setIndxActive] = useState(0);
  const [scrollHandlerEnabled, setScrollHandlerEnabled] = useState(true);

  
  const handleScroll = useCallback(() => {
    if (!scrollHandlerEnabled) {
      return;
    }

    const sectionElements = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sectionElements.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition <= bottom) {
        setIndxActive(parseInt((section.id[section.id.length - 1])) - 1);
      }
    });
  }, [scrollHandlerEnabled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, scrollHandlerEnabled]);

  const disableScrollHandlerDuringAnimation = () => {
    setScrollHandlerEnabled(false);

    setTimeout(() => {
      setScrollHandlerEnabled(true);
    }, 750);
  };

  return (
    <div className='hidden md:block'>
      <div className='fixed w-full flex items-center justify-between bg-primary z-10 shadow-md'>
        <Logo
          className='w-10 h-10 my-3 ml-3'
        />
        
        <nav>
          <ul className='flex items-center text-xl justify-center gap-x-16'>
            { toggleDownValues.toggleDowns.map((toggleDown, indx) => <ToggleDown 
              onClick={() => {
                disableScrollHandlerDuringAnimation()
                setIndxActive(indx)
              }}
              toggleDown={ toggleDown } 
              key={indx}
            />) }
          </ul>
          <div style={{
            transform: `translate(${dotPositions[indxActive]}px)`
          }} className='border-text-primary border-2 w-2 h-2 rounded-full transition-transform'/>
        </nav>
        <div className='flex w-24 gap-x-3'>
          { socialLinkValues.map(( link, indx ) => <SocialLink key={indx} to={ link.to } icon={ link.icon } />) }
        </div>
      </div>

      <HeaderHero/>
    </div>
  )
}

export default HeaderDesktop