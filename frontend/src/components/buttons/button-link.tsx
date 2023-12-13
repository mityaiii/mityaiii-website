import { motion } from "framer-motion";

interface IButtonLink {
  text: string;
  img: string | React.ReactNode;
}

export const ButtonLink: React.FC<IButtonLink> = ({ text, img }) => {
  return (
    <motion.a
      className="text-text-primary fill-text-primary stroke-text-primary"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95
      }}
      href='#'
    >
      <div className='flex items-center justify-center gap-x-2'>
        { typeof img === 'string' 
          ? <img className="w-6 h-6" src={img}/>
          : img
        }
        <p>{ text }</p>
      </div>
    </motion.a>
  )
}
