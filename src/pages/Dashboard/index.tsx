import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/contentSet/ContentHeader';
import gains from '../../DB/gains'
import expenses from '../../DB/expenses'
import { IRouteParams } from '../List';
import monthsList from '../../utils/months'

import { Container } from './styles';
import SelectInput from '../../components/contentSet/SelectInput';

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
    </Container>
  )
}

export default Dashboard;