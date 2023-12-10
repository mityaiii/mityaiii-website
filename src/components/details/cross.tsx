import { twMerge } from 'tailwind-merge';

const Cross = ({ className }: { className?: string }) => {
  return (
    <svg className={twMerge("stroke-text-primary", className)} width="32px" height="32px">
      <path d="M3 13 L20 13" strokeWidth="4" strokeLinecap="round" />
      <path d="M12 22 L12 5" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default Cross;