import React from 'react'
import { IProject } from './project'
import { TextContent } from './text-content'
import { PreviewImage } from './image-preview/image-preview'

export const ProjectRight: React.FC<IProject> = (props) => {
  return (
    <div className='md:flex gap-8 items-center flex-col lg:flex-row hidden'>
      <TextContent {...props.textContent}/>
      <PreviewImage {...props.imgContent}/>
    </div>
  )
}
