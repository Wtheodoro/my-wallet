import React from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import SelectInput from '../../components/contentSet/SelectInput';

import { Container } from './styles';

const Dashboard = () => {

  const options = [
    {
      value: 'Walison',
      label: 'Walison'
    },
    {
      value: 'Terry',
      label: 'Terry'
    },
    {
      value: 'Oliver',
      label: 'Oliver'
    },
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;