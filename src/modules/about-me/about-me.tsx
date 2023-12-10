import { MTitle, Container, GridColumns, MTextContent } from '@/components/index'
import aboutMePic from '@/assets/about-img.webp'
import workingEmoji from '@/assets/working-emoji.png'
import text from '@/assets/text.svg'
import { MStack } from './stack'
import { motion } from 'framer-motion'
import { TextDecorLink } from './text-decor-link'

const Emoji = () => {
  return (
      <div className='hidden md:block'>
        <div className='absolute bg-primary rounded-full p-7 -right-10 -bottom-12'>
          <img className='w-24' src={workingEmoji} alt='Working Emoji' />
        </div>
        <img className='absolute animate-spin-slow w-[10.5rem] -right-[3.15rem] -bottom-[3.8rem]' src={text} alt='Text' />
      </div>
  );
};


export function AboutMe() {
  return (
    <section id='about-me-1' className='py-[15vh] md:py-[20vh] overflow-hidden'>
      <Container>
        <MTitle 
          className='pb-10'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .3, }}
        >aboutme</MTitle>
        <GridColumns>
          <motion.div 
            className='relative w-4/5 md:w-[420px]'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: .3, }}
          >
            <img className='rounded-2xl' src={aboutMePic} alt='aboutmepic'/>
            <Emoji/>
          </motion.div>
          <MTextContent 
            className='mx-auto w-4/5 md:w-[500px]'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{x: 0, opacity: 1 }}
            transition={{duration: .3, }}
          >
            <h4 className='font-bold text-xl pb-3'>Front-end Developer <br/>  based in Saint Petersburg, Russia 📍</h4>
            <p className='text-primary-500'>
              Как фронтенд-разработчик, я с увлечением погружаюсь в создание эстетичных и функциональных пользовательских
              интерфейсов, а также в изучение новых технологий и подходов в дизайне. В настоящее время я принимаю участие 
              в IT-стартапе <TextDecorLink to='https://reallyintop.ru/'>"Rit"</TextDecorLink> и являюсь постоянным участником хакатонов вместе с моей командой <TextDecorLink to='https://github.com/shampiniony'>"Шампиньоны"</TextDecorLink>.
            </p>
          </MTextContent>
        </GridColumns>
        <MStack
          initial={{ y: 50, opacity: 0 }}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .3, }}
        />
      </Container>
    </section>
  )
}
