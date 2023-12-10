import github from '@/assets/github.svg'
import telegram from '@/assets/telegram.svg'

export interface ISocialLink {
  to: string;
  icon: string; 
}

export const socialLinkValues: ISocialLink[] = [
  {
    to: 'https://github.com/mityaiii',
    icon: github,
  },
  {
    to: 'https://t.me/aliasmityai',
    icon: telegram,
  }
]