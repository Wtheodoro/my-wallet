import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
