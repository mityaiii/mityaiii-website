import { motion, useCycle } from 'framer-motion'
import Burger from "../burger/burger"
import { Nav } from "./nav"
import { useEffect, useRef } from 'react'
import { useDimensions } from '@/hooks/index'
import { Logo } from '../../logo'

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100vw - 32px) 32px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at calc(100vw - 32px) 32px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

const NavContainer = () => {
  const [isOpen, setIsOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <motion.div
      className='w-[64px]'
      initial={false}
      animate={isOpen ? "open": "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className='bg-primary-100 shadow-md flex fixed items-center justify-between top-0 w-full z-50'>
        <Logo
          className='w-9 h-9 ml-3'
        />
        <Burger isOpen={ isOpen } setIsOpen={ setIsOpen }/>
      </div>
      <motion.div
        variants={variants}
        className="flex fixed transition-transform items-center bg-primary h-[100vh] justify-center top-0 w-full z-10 text-center">
        <Nav setIsOpen={setIsOpen}/>
      </motion.div>
    </motion.div>
  )
}

export default NavContainer