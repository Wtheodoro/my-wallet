import React from 'react';
import Aside from '../Aside';
import Content from '../contentSet/Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';

// Stateless component
const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHeader />
    <Aside />
    <Content>
      {children}
    </Content>
  </Grid>
)

export default Layout;