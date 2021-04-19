import React, { useState } from 'react';
import { Container, Header, LogoImg, Title, Menu, MenuItemLink, MenuItemButton, ToggleMenu,ThemeToggleFooter } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md'
import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/themeContext'
import Toggle from '../Toggle';

const Aside: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<Boolean>(false)
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState<Boolean>(false)
  const { toggleTheme, theme } = useTheme()
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  const { singOut } = useAuth()
  return (
    <Container menuIsOpen={menuIsOpen}>
      <Header>
        <ToggleMenu onClick={()=>setMenuIsOpen(!menuIsOpen)}>
          {
            menuIsOpen ? <MdClose/> : <MdMenu/>
          }
        </ToggleMenu>
        <LogoImg src={logoImg} alt="Logo My Wallet" />
        <Title>My Wallet</Title>
      </Header>

      <Menu>
        <MenuItemLink href="/">
          <MdDashboard />
          DashBoard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Incomes
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Expenses
        </MenuItemLink>

        <MenuItemButton onClick={singOut}>
          <MdExitToApp />
          Sign Out
        </MenuItemButton>
      </Menu>

      <ThemeToggleFooter menuIsOpen={menuIsOpen}>
        <Toggle
          labelLeft="Light"
          labelRigth="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  )
}

export default Aside;