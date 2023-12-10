import { motion } from "framer-motion";

export interface IToggleDown {
  title: string;
  to: string;
}

const ToggleDown = ({ onClick, toggleDown }:
  { 
    onClick: () => void, 
    toggleDown: IToggleDown 
  }) => {
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9
      }}
    >
      <a
        onClick={onClick}
        href={toggleDown.to} 
        className='text-center cursor-pointer text-text-primary'
      >
        { toggleDown.title }
      </a>
    </motion.li>
  )
}

export default ToggleDown