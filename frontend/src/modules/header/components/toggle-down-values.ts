import { IToggleDown } from "./toggle-down";

interface IToggleDownValues {
  toggleDowns: IToggleDown[];
}

const toggleDownValues : IToggleDownValues = {
  toggleDowns: [
    {
      title: 'About',
      to: '#about-me-1',
    },
    {
      title: 'Projects',
      to: '#projects-2',
    },
    {
      title: 'Contacts',
      to: '#contacts-3',
    },
  ]
}

export default toggleDownValues;