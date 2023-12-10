import { ProjectHoc } from './project.hoc';
import { ITextContent } from './text-content';
import { IPreviewImage } from './image-preview/image-preview';

export interface IProject {
  textContent: ITextContent;
  imgContent: IPreviewImage;
  orientation: "right" | "left";
}

export const Project: React.FC<IProject> = (props) => {
  return (
    <div className='mx-auto border-2 border-primary-100 bg-primary-50 shadow-xl rounded-2xl p-4 flex'>
      <ProjectHoc {...props}/>
    </div>
  )
}
