import toggleDownValues from "../../toggle-down-values"
import ToggleDown from "../../toggle-down"

export const Nav = ({ setIsOpen }: { setIsOpen: () => void }) => {
  return (
    <ul className="flex flex-col text-3xl gap-16">
      { toggleDownValues.toggleDowns.map((value, indx) => (
        <ToggleDown onClick={setIsOpen} toggleDown={value} key={indx}/>
      )) }
    </ul>
  )
}