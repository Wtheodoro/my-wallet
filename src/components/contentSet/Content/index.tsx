import React from 'react';

import { Container } from './styles';

// Stateless component, doesn't need a return
const Content: React.FC = ({ children }) =>  (
  <Container>
    {children}
  </Container>
)

export default Content;