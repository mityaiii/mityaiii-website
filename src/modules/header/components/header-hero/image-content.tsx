import { Line, Cross } from '@/components/index';

const ImageContent = () => {
  return (
    <div className='relative max-w-[15rem] mx-auto'>
        <div className='border'>
          <div className='img'/>
        </div>
        <div className='absolute left-0 rotate-6 bottom-0 flex gap-x-2'>
          <Line/>
          <Line/>
          <Line/>
          <Line/>
          <Line/>
        </div>
        <div className='absolute -right-2 md:-right-6 -top-4 -rotate-12'>
          <div className='relative w-14 h-14'>
            <Cross className='absolute right-0'/>
            <Cross className='absolute bottom-0 right-1'/>
            <Cross className='absolute top-1'/>
          </div>
        </div>
      </div>
  )
}

export default ImageContent