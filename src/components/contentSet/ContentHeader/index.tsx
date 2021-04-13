import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <button>Botão A</button>
        <button>Botão B</button>
      </Controllers>
    </Container>
  )
}

export default ContentHeader;