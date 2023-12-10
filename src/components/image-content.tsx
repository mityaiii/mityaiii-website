import React from 'react'
import { twMerge } from 'tailwind-merge';

interface IImageContent {
  className?: string;
  imgSrc: string;
  width?: string;
  height?: string;
  alt: string;
}

export const ImageContent: React.FC<IImageContent> = ({ imgSrc, alt, width, height, className }) => {
  return (
    <img style={{width: width, height: height}} className={twMerge('rounded-2xl', className)} src={imgSrc} alt={alt}/>
  )
}
