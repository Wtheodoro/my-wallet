import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import gains from '../../DB/gains'
import expenses from '../../DB/expenses'
import monthsList from '../../utils/months'
import { Container, Content } from './styles';
import SelectInput from '../../components/contentSet/SelectInput';
import WalletBox from '../../components/contentSet/dashboardSet/WalletBox';
import MessageBox from '../../components/contentSet/dashboardSet/MessageBox';
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinninImg from '../../assets/grinning.svg'
import PieChart from '../../components/contentSet/dashboardSet/PieChart';


const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())


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

  }, [])

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, [])

  const totalExpenses = useMemo(() => {
    let total: number = 0

    expenses.map(i => {
      const date = new Date(i.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === selectedMonth && year === selectedYear) {
        total += Number(i.amount)
      }

      return total
    })

    return total
  }, [selectedMonth, selectedYear])

  const totalIncomes = useMemo(() => {
    let total: number = 0

    gains.map(i => {
      const date = new Date(i.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === selectedMonth && year === selectedYear) {
        total += Number(i.amount)
      }

      return total
    })

    return total
  }, [selectedMonth, selectedYear])

  const message = useMemo(() => {
    if (totalIncomes-totalExpenses < 0) {
      return {
        title: 'Bad news',
        description: 'Its balance is almost equal to Antarctica. Under zero.',
        footerText: 'maybe you should think about saving a little money',
        icon: sadImg
      }

    } else if(totalIncomes-totalExpenses === 0) {
      return {
        title: 'Zeros and zeros',
        description: 'Balance is everything, but not when it comes to money.',
        footerText: 'maybe you should think about saving a little money',
        icon: grinninImg
      }

    } else {
      return {
        title: "Very nice!",
        description: "Your balance is positive",
        footerText: "Keep it up. You should consider investing",
        icon: happyImg
      }
    }

  }, [totalIncomes, totalExpenses])

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
          amount={(totalIncomes - totalExpenses)}
          footerLabel={'Updated based on inputs and outputs'}
          icon='dolar'
          backgroundColor='#4E41F0'
        />
        <WalletBox
          title={'Income'}
          amount={totalIncomes}
          footerLabel={'Atualizado com base nas entradas e saidas'}
          icon='arrowUp'
          backgroundColor='#F7931B'
        />
        <WalletBox
          title={'Expenses'}
          amount={totalExpenses}
          footerLabel={'Atualizado com base nas entradas e saidas'}
          icon='arrowDown'
          backgroundColor='#E44C4E'
        />

        <MessageBox 
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />

        <PieChart />
      </Content>

      
    </Container>
  )
}

export default Dashboard;