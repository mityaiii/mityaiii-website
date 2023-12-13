import { Title, Container } from '@/components/index'
import { Contact } from './components'
import { IContact } from './components/contact'
import { motion } from 'framer-motion'

const contacts: IContact[] = [
  {
    src: <svg className='stroke-text-primary' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>,
    header: 'location',
    description: 'Saint Petersburg'
  },
  {
    src: <svg className='stroke-text-primary' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
    header: 'mail',
    description: 'mityaiiiofficial@gmail.com'
  },
]

export const Contacts = () => {
  return (
    <section id='contacts-3' className='bg-primary py-[20vh]'>
      <Container>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .3, }}
        >
          <Title>contacts</Title>
          <p className='text-center lg:text-start lg:text-xl font-bold'>Don't be shy! Hit me up! 👇</p>
        </motion.div>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: .3, }}
          className='pt-6 items-center flex-col sm:flex-row flex mx-auto lg:mx-0'
        >
          { contacts.map((contact, indx) => <Contact key={indx} {...contact}/>) }
        </motion.div>
      </Container>
    </section>
  )
}
