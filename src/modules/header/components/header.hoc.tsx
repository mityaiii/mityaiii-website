import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

const HeaderHoc = () => {
  return (
    <>
      <HeaderMobile/>
      <HeaderDesktop/>
    </>
  )
}

export default HeaderHoc