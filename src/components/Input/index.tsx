import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

// Creating a interface thas is like a input type
type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <Container {...rest}/>
  )
}

export default Input;