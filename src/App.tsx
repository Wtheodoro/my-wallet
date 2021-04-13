import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import Dashboard from './pages/Dashboard';
import List from './pages/List'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles/>
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
