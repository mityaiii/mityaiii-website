import React from 'react'

export interface IContact {
  src: React.ReactNode | string;
  header: string;
  description: string; 
}

export const Contact: React.FC<IContact> = (props) => {
  return (
    <div className='w-[260px] h-[120px] flex gap-3 items-center '>
      { props.src }
      <div>
        <h6 className='font-bold'>{props.header}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
