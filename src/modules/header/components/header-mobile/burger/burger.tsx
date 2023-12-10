import './burger.css'

const Burger = ({ isOpen, setIsOpen, className }: { className?: string, isOpen: boolean, setIsOpen: () => void }) => {
  return (
    <div className={ className }>
      <svg className='burger-svg'>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className={`plate plate5 ${isOpen ? 'active' : ''}`} onClick={setIsOpen}>
        <svg className="burger burger-svg" version="1.1" height="80" width="80" viewBox="0 0 100 100">
          <path className="line line1" d="M 30,35 H 70 " />
          <path className="line line2" d="M 50,50 H 30 L 34,32" />
          <path className="line line3" d="M 50,50 H 70 L 66,68" />
          <path className="line line4" d="M 30,65 H 70 " />
        </svg>
        <svg className="x burger-svg" version="1.1" height="80" width="80" viewBox="0 0 100 100">
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </div>
  )
}

export default Burger;