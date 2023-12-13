import { HeaderHoc } from './components'

export const Header = () => {
  return (
    <header className='relative min-h-[110vh] md:min-h-[100vh] bg-primary-50'>
      <HeaderHoc/>
      <div className='font-forNumbers absolute flex justify-between left-0 right-0 mx-auto w-[90%] max-w-[1480px] -bottom-7 text-[4rem] sm:-bottom-14 sm:text-[8rem] lg:-bottom-16 lg:text-[10rem] text-primary'>
        <h1>61</h1>
        <h1>78</h1>
      </div>
    </header>
  )
};