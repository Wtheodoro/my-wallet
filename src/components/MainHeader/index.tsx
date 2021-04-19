import React, {useMemo, useState} from 'react';
import emojis from '../../utils/emojis'
import Toggle from '../Toggle';
import { useTheme } from '../../hooks/themeContext'
import { Container, Profile, Welcome, UserName, ToggleContainer } from './styles';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <Container>
      <ToggleContainer>
        <Toggle
          labelLeft="Light"
          labelRigth="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ToggleContainer>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Helen Bennington</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader;