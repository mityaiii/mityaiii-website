import { Container, Title } from "@/components/index"
import { IProject, Project } from "./components/project"
import { motion } from "framer-motion"

const projects: IProject[] = [
  {
    textContent: {
      header: 'car rental',
      description: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
      sourceLink: '#',
      link: '#',
      stack: ['react', 'sass', 'django'],
    },
    imgContent: {
      img: 'https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp',
      alt: "car rental",
    },
    orientation: "left"
  },
  {
    textContent: {
      header: 'car rental',
      description: 'A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.',
      sourceLink: '#',
      link: '#',
      stack: ['react', 'sass', 'django'],
    },
    imgContent: {
      img: 'https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp',
      alt: "car rental",
    },
    orientation: "right"
  },
]

export const Projects = () => {
  return (
    <section id="projects-2" className="bg-primary-50 py-[15vh] md:py-[20vh]">
      <Container>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .3, }}
        >
          <Title className="pb-2">projects</Title>
          <p className='font-bold mx-auto lg:mx-0 max-w-[80%] md:text-xl pb-10 text-center lg:text-start'>Each project is a unique piece of development 🧩</p>
        </motion.div>
        <div className="flex flex-col gap-10">
          { projects.map((project, indx) => <Project key={indx} {...project}/>) }
        </div>
      </Container>
    </section>
  )
}
