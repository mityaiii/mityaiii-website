import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ITitleProps {
  className?: string;
  children: string;
}

export const Title: React.FC<ITitleProps> = forwardRef((props, ref: React.Ref<HTMLHeadingElement>) => {
  return (
    <h1 
      className={twMerge('text-[2.5rem] md:text-[3.5rem] text-text-primary text-center lg:text-start', props.className)}
      ref={ref}
    >
      .{ props.children }
    </h1>
  )
});

export const MTitle = motion(Title);