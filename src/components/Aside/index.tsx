import React from 'react';
import { Container, Header, LogoImg, Title, Menu, MenuItemLink } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'
import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo My Wallet" />
        <Title>My Wallet</Title>
      </Header>

      <Menu>
        <MenuItemLink href="/dashboard">
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

        <MenuItemLink href="#">
          <MdExitToApp />
          Sign Out
        </MenuItemLink>
      </Menu>
    </Container>
  )
}

export default Aside;