import Logo from '../../assets/Logo.svg'
import {Timer, Scroll} from 'phosphor-react'
import { HeaderLayout } from './style'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <HeaderLayout>
        <img src={Logo} alt="" />
        <nav  className='IconsHeader'>
            <NavLink to="/"> <Timer size={24}/></NavLink>
            <NavLink to="/history"><Scroll size={24}/></NavLink>
       </nav>
    </HeaderLayout>
  )
}

export default Header