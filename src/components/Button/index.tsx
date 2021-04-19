import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<IButtonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Button;