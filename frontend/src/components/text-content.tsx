import React, { forwardRef } from 'react'
import { ChildrenType } from '../types';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface ITextContent {
  className?: string;
  children: ChildrenType;
} 

export const TextContent: React.FC<ITextContent> = forwardRef(({ className, children }, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div 
      className={twMerge('', className)}
      ref={ref}
    >{ children }</div>
  )
});

export const MTextContent = motion(TextContent);