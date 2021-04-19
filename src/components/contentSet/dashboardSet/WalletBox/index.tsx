import React, { useMemo } from 'react';
import CountUp from 'react-countup'
import dollarImg from '../../../../assets/dollar.svg'
import arrowUpImg from '../../../../assets/arrow-up.svg'
import arrowDownImg from '../../../../assets/arrow-down.svg'
import { Container } from './styles';

interface IWalletBoxProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dolar' | 'arrowUp' | 'arrowDown'
  backgroundColor: string
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  backgroundColor
}) => {

  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dollarImg
      case 'arrowUp':
        return arrowUpImg
      case 'arrowDown':
        return arrowDownImg
      default:
        return undefined
    }
  },[icon])

  return (
    <Container backgroundColor={backgroundColor}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp 
          end={amount}
          separator=","
          decimal="."
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
        <img src={iconSelected} alt={title}/>
    </Container>
  )
}

export default WalletBox;