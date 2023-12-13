import './link.css'

export const TextDecorLink = ({ children, to }: { children: string, to: string }) => {
  return (
    <a href={to} className='text-decor-link'>{children}</a>
  )
}
