import ImageContent from './image-content'
import TextContent from './text-content'

const HeaderHeroHoc = () => {
  return (
    <>
        <div className='md:hidden'> 
          <ImageContent/>
          <TextContent/>
        </div>
        <div className='hidden md:flex justify-between items-center'>
          <TextContent/>
          <ImageContent/>
        </div>
    </>
  )
}

export default HeaderHeroHoc