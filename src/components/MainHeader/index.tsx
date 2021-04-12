import React, {useMemo} from 'react';
import emojis from '../../utils/emojis'
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  return (
    <Container>
      <h2>Tootgle</h2>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Hayley Williams</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader;