import React from 'react'
import { IProject } from './project'
import { PreviewImage } from './image-preview/image-preview'
import { TextContent } from './text-content'

export const ProjectLeft: React.FC<IProject> = (props) => {
  return (
    <div className='flex gap-8 items-center flex-col lg:flex-row'>
      <PreviewImage {...props.imgContent}/>
      <TextContent {...props.textContent}/>
    </div>
  )
}
