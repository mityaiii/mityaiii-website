import { HeaderHero } from "../header-hero";
import NavContainer from "./nav/nav-container";

const HeaderMobile = () => {
  return (
    <div className="md:hidden">
      <NavContainer/>
      <HeaderHero/>
    </div>
  )
}

export default HeaderMobile;