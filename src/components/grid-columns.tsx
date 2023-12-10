import React from 'react'
import { ChildrenType } from '@/types/index'
import { twMerge } from 'tailwind-merge';

interface IGridColumns {
  children: ChildrenType;
  className?: string; 
}

export const GridColumns: React.FC<IGridColumns> = ({ children, className }) => {
  return (
    <div className={twMerge('flex flex-col gap-12 items-center lg:items-start lg:flex-row lg:justify-between', className)}>
      { children }
    </div>
  )
}
