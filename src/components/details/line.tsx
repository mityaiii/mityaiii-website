import { twMerge } from 'tailwind-merge';

const Line = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge('w-1 h-6 rounded-xl bg-text-primary', className)}/>
  )
}

export default Line;