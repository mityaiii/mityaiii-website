import './border.css'
import HeaderHeroHoc from './header-hero.hoc';

const HeaderHero = () => {
  return (
    <div className='flex items-center min-h-max pt-[10vh] h-[90vh] md:h-[80vh]'>
      <div className='w-[90vw] xl:w-3/5 max-w-[720px] mx-auto'>
        <HeaderHeroHoc/>
      </div>
    </div>
  )
}

export default HeaderHero