import React from 'react'
import { ChildrenType } from '@/types/index';
import { twMerge } from 'tailwind-merge';

interface ISectionBorder {
  className?: string;
  children: ChildrenType;
}

export const SectionBorder: React.FC<ISectionBorder> = ({ children, className }) => {
  return (
    <div className={twMerge('border-2 p-8 rounded-2xl bg-primary-200 border-text-primary shadow-xl', className)}>{ children }</div>
  )
};