import React from 'react'
import { ISocialLink } from './social-links.value'

const SocialLink: React.FC<ISocialLink> = ({ to, icon }) => {
  return (
    <a href={to}>
      <img className='w-7 h-7 transition-transform duration-300 hover:scale-125' src={icon}/>
    </a>
  )
}

export default SocialLink