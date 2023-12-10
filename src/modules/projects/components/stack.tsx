import React from 'react'
import './border.css'
import { useState } from 'react'
import { motion } from 'framer-motion';

export const Stack = ({ children }: { children: string }) => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    setPosition({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <motion.div 
      className='border-rainbow'
      style={{
        '--x': position.x,
        '--y': position.y,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      whileHover={{scale: 1.05}}
    >
    { children }
  </motion.div>
  )
}
