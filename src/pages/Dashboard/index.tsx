import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import gains from '../../DB/gains'
import expenses from '../../DB/expenses'
import { IRouteParams } from '../List';
import monthsList from '../../utils/months'
import { Container, Content } from './styles';
import SelectInput from '../../components/contentSet/SelectInput';
import WalletBox from '../../components/contentSet/dashboardSet/WalletBox';
import MessageBox from '../../components/contentSet/dashboardSet/MessageBox';
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'


const Dashboard: React.FC<IRouteParams> = ({ match }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const { type } = match.params

  const years = useMemo(() => {
    let uniqueYears: number[] = []
    const concatArr = [...gains, ...expenses]

    concatArr.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })

  }, [type])

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#4E41F0">
        <SelectInput 
            options={months}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            defaultValue={selectedMonth}
          />
          <SelectInput 
            options={years} 
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            defaultValue={selectedYear}
          />
      </ContentHeader>

      <Content>
        <WalletBox
          title={'Balance'}
          amount={150.00}
          footerLabel={'Updated based on inputs and outputs'}
          icon='dolar'
          backgroundColor='#4E41F0'
        />
        <WalletBox
          title={'Income'}
          amount={5000.00}
          footerLabel={'Atualizado com base nas entradas e saidas'}
          icon='arrowUp'
          backgroundColor='#F7931B'
        />
        <WalletBox
          title={'Expenses'}
          amount={4850.00}
          footerLabel={'Atualizado com base nas entradas e saidas'}
          icon='arrowDown'
          backgroundColor='#E44C4E'
        />
      </Content>

      <MessageBox 
        title="Very nice!"
        description="our balance is positive"
        footerText="Keep it up. You should consider investing"
        icon={happyImg}
      />
    </Container>
  )
}

export default Dashboard;