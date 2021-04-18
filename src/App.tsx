import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/themeContext'
import Routes from './routes';

const App: React.FC = () => {

  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes />
    </ThemeProvider>
  )
}

export default App;