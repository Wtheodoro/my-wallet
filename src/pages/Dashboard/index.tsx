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
import opsImg from '../../assets/ops.svg'
import PieChartBox from '../../components/contentSet/dashboardSet/PieChartBox';
import LineChartBox from '../../components/contentSet/dashboardSet/LineChartBox';
import BarChartBox from '../../components/contentSet/dashboardSet/BarChartBox';


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
        footerText: 'maybe you should think about saving a little money.',
        icon: sadImg
      }

    } else if(totalIncomes === 0 && totalExpenses === 0) {
      return {
        title: 'Ooops',
        description: 'there is no financial record this month.',
        footerText: 'It was not possible to find Incomes or Expenses in the selected month and year',
        icon: opsImg
      }

    } else if(totalIncomes-totalExpenses === 0) {
      return {
        title: 'Zeros and zeros',
        description: 'Balance is everything, but not when it comes to money.',
        footerText: 'maybe you should think about saving a little money.',
        icon: grinninImg
      }

    } else {
      return {
        title: "Very nice!",
        description: "Your balance is positive.",
        footerText: "Keep it up. You should consider investing.",
        icon: happyImg
      }
    }

  }, [totalIncomes, totalExpenses])

  const relationExpInc = useMemo(() => {
    const total = totalExpenses + totalIncomes
    const incPercent = Number(((totalIncomes/total) * 100).toFixed(1))
    const expPercent = Number(((totalExpenses/total) * 100).toFixed(1))

    const data = [
      {
        name: "Incomes",
        value: totalIncomes,
        percent: incPercent ? incPercent : 0,
        color: '#F7931B'
      },
      {
        name: "Expenses",
        value: totalExpenses,
        percent: expPercent ? expPercent : 0,
        color: '#E44C4E'
      },
    ]

    return data
  },[totalIncomes, totalExpenses])

  const historyData = useMemo(() => {
    return monthsList.map((_, month) => {

      let entryAmount = 0
      let outputAmount = 0
      gains.forEach(gain => {
        const date = new Date(gain.date)
        const gainMonth = date.getMonth()
        const gainYear = date.getFullYear()
        if (gainMonth === month && gainYear === selectedYear) {
          try {
            entryAmount += Number(gain.amount)
          } catch {
            throw new Error('Entryamount must be a valid number.')
          }
        }
      });

      expenses.forEach(expense => {
        const date = new Date(expense.date)
        const expenseMonth = date.getMonth()
        const expenseYear = date.getFullYear()
        if (expenseMonth === month && expenseYear === selectedYear) {
          try {
            outputAmount += Number(expense.amount)
          } catch {
            throw new Error('Entryamount must be a valid number.')
          }
        }
      });

      return {
        monthNumber: month,
        month: monthsList[month].substr(0, 3),
        entryAmount,
        outputAmount,
      }

    }) //concat loop methods. Can be done with .map but not with.forEach
    .filter(item => {
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()

      return (selectedYear === currentYear && item.monthNumber <= currentMonth) || (selectedYear < currentYear)
    })
  }, [selectedYear])

  const expRecurrentVersusEventual = useMemo(() => {
    let recurrentAmount = 0
    let eventualAmount = 0

    expenses.filter((exp) => {
      const date = new Date(exp.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      return month === selectedMonth && year === selectedYear
    })
    .forEach((exp) => {
      if(exp.frequency === 'recurrent') {
        return recurrentAmount += Number(exp.amount)
      }

      if (exp.frequency === 'eventual') {
        return eventualAmount += Number(exp.amount)
      }
    })

    const recurrentPercent = Number(((recurrentAmount/(recurrentAmount+eventualAmount)) * 100).toFixed(1))
    const eventualPercent = Number(((eventualAmount/(recurrentAmount + eventualAmount)) * 100).toFixed(1))

    return [
      {
        name: 'recurrent',
        amount: recurrentAmount,
        percent: recurrentPercent ? recurrentPercent : 0,
        color: "#F7931B"
      },
      {
        name: 'eventual',
        amount: eventualAmount,
        percent: eventualPercent ? eventualPercent : 0,
        color: "#E44C4E"
      }
    ]
  }, [selectedYear, selectedMonth])

  const incRecurrentVersusEventual = useMemo(() => {
    let recurrentAmount = 0
    let eventualAmount = 0

    gains.filter((inc) => {
      const date = new Date(inc.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      return month === selectedMonth && year === selectedYear
    })
    .forEach((inc) => {
      if(inc.frequency === 'recurrent') {
        return recurrentAmount += Number(inc.amount)
      }

      if (inc.frequency === 'eventual') {
        return eventualAmount += Number(inc.amount)
      }
    })

    const recurrentPercent = Number(((recurrentAmount/(recurrentAmount+eventualAmount)) * 100).toFixed(1))
    const eventualPercent = Number(((eventualAmount/(recurrentAmount + eventualAmount)) * 100).toFixed(1))

    return [
      {
        name: 'recurrent',
        amount: recurrentAmount,
        percent: recurrentPercent ? recurrentPercent : 0,
        color: "#F7931B"
      },
      {
        name: 'eventual',
        amount: eventualAmount,
        percent: eventualPercent ? eventualPercent : 0,
        color: "#E44C4E"
      }
    ]
  }, [selectedYear, selectedMonth])

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

        <PieChartBox data={relationExpInc}/>

        <LineChartBox 
          data={historyData}
          lineColorAmountEntry="#F7931B"
          lineColorAmountOutput="#E44C4E"
        />

        <BarChartBox 
          title="Expenses"
          data={expRecurrentVersusEventual}
        />

        <BarChartBox 
          title="Incomes"
          data={incRecurrentVersusEventual}
        />
      </Content>

      
    </Container>
  )
}

export default Dashboard;