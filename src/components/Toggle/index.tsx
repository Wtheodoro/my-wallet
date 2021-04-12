import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSwitch } from './styles';

const Toggle: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true)
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSwitch
        onChange={() => setToggle(!toggle)} 
        checked={toggle}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}

export default Toggle;