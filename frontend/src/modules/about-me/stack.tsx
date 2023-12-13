import { motion } from "framer-motion"
import { forwardRef } from "react"

interface IStackImage {
  src: string;
  title: string;
}

const stackImgs: IStackImage[] = [
  {
    src: 'https://skillicons.dev/icons?i=django',
    title: 'django',
  },
  {
    src: 'https://skillicons.dev/icons?i=net',
    title: '.net',
  },
  {
    src: 'https://skillicons.dev/icons?i=ts',
    title: 'ts',
  },
  {
    src: 'https://skillicons.dev/icons?i=threejs',
    title: 'three js',
  },
  {
    src: 'https://skillicons.dev/icons?i=react',
    title: 'react',
  },
  {
    src: 'https://skillicons.dev/icons?i=next',
    title: 'next js',
  },
  {
    src: 'https://skillicons.dev/icons?i=tailwind',
    title: 'tailwind css',
  },
  {
    src: 'https://skillicons.dev/icons?i=sass',
    title: 'sass',
  },
]

export const Stack = forwardRef((_props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div 
      className='pt-20'
      ref={ref}
    >
      <h2 className='text-center text-text-primary text-3xl'>Stack</h2>
      <div className='w-4/5 flex-wrap justify-center pt-4 md:max-w-[480px] mx-auto flex gap-2 border-t-2 border-primary-400'>
        { stackImgs.map((value, indx) => 
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            key={indx}
            src={value.src}
            title={value.title}
            alt={value.title}
          />
        )}
      </div>
    </div>
  )
})

export const MStack = motion(Stack);