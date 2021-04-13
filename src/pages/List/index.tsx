import React from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import HistoryFinanceTrack from '../../components/contentSet/HistoryFinanceTrack';
import SelectInput from '../../components/contentSet/SelectInput';

import { Container, Content } from './styles';

const List: React.FC = () => {

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
      <ContentHeader title="Expenses" lineColor="#E44C4E">
        <SelectInput options={options}/>
      </ContentHeader>
      <Content>
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
        <HistoryFinanceTrack 
          amount='14,350.00'
          cardColor='#313862'
          subtitle='27/07/2021'
          tagColor='#E44C4E'
          title='Macbook pro 2021'
        />
      </Content>
    </Container>
  )
}

export default List;