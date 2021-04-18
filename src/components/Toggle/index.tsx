import React from 'react';
import { Container, ToggleLabel, ToggleSwitch } from './styles';

interface IToggleProps {
  labelLeft: string
  labelRigth: string
  checked: boolean
  onChange(): void
}
const Toggle: React.FC<IToggleProps> = ({ labelLeft, labelRigth, checked, onChange}) => {
  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSwitch
        onChange={onChange} 
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <ToggleLabel>{labelRigth}</ToggleLabel>
    </Container>
  )
}

export default Toggle;