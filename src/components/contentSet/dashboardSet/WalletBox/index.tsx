import React from 'react';
import dollarImg from '../../../../assets/dollar.svg'
import arrowUpImg from '../../../../assets/arrow-up.svg'
import arrowDownImg from '../../../../assets/arrow-down.svg'
import { Container } from './styles';

interface IWalletBoxProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dolar' | 'arrowUP' | 'arrowDown'
  backgroundColor: string
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  backgroundColor
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <span>{title}</span>
      <h1>{amount}</h1>
      <small>{footerLabel}</small>
      <img src={dollarImg} alt={title}/>
    </Container>
  )
}

export default WalletBox;