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
        <MenuItemLink href="#">
          <MdDashboard />
          DashBoard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
          Incomes
        </MenuItemLink>

        <MenuItemLink href="#">
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