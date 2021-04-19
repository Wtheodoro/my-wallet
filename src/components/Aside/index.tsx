import React from 'react';
import { Container, Header, LogoImg, Title, Menu, MenuItemLink, MenuItemButton } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'
import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

const Aside: React.FC = () => {
  const { singOut } = useAuth()
  return (
    <Container>
      <Header>
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
    </Container>
  )
}

export default Aside;