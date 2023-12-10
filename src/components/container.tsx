import React from 'react'
import { ChildrenType } from '@/types/index'

interface IContainer {
  children: ChildrenType;
}

export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className='w-[95%] md:w-[80%] max-w-[1080px] mx-auto'>{ children }</div>
  )
}
