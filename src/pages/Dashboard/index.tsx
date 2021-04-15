import React from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';


import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;