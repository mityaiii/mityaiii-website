import React, { useEffect, useState } from 'react'
import { IProject } from './project'
import { ProjectLeft } from './project-left'
import { ProjectRight } from './project-right'

const lgScreen = 1024;

export const ProjectHoc: React.FC<IProject> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {
        props.orientation === "left" || width <= lgScreen
        ? <ProjectLeft {...props}/>
        : <ProjectRight {...props}/> 
      }
    </>
  )
}