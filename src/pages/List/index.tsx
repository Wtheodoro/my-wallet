import React, {useEffect, useMemo, useState} from 'react';
import  { uuid } from 'uuidv4'
import ContentHeader from '../../components/contentSet/ContentHeader';
import HistoryFinanceTrack from '../../components/contentSet/HistoryFinanceTrack';
import SelectInput from '../../components/contentSet/SelectInput';
import { Container, Content, Filters } from './styles';
import gains from '../../DB/gains'
import expenses from '../../DB/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import monthsList from '../../utils/months'

export interface IRouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
  id: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>()
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())
  const [selectedFrequency, setSelectedFrequency] = useState<String[]>(['recurrent', 'eventual'])
  const { type } = match.params

  const typeFromUrl = useMemo(() => {
    return type === 'entry-balance' ?
      {
        title: 'Incomes',
        lineColor: '#f7931B',
        data: gains
      } 
    : 
      {
        title: 'Expenses',
        lineColor: '#E44C4E',
        data: expenses
      }
  }, [type])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    if (type === 'entry-balance') {
      gains.forEach(i => {
        const date = new Date(i.date)
        const year = date.getFullYear()

        if (!uniqueYears.includes(year)) {
          uniqueYears.push(year)
        }
      })
    } else if (type === 'exit-balance') {
      expenses.forEach(i => {
        const date = new Date(i.date)
        const year = date.getFullYear()

        if (!uniqueYears.includes(year)) {
          uniqueYears.push(year)
        }
      })
    }
  

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

  useEffect(() => {    
    const { data } = typeFromUrl

    const filteredData = data.filter((i: any) => {
      const date = new Date(i.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return month === selectedMonth && year === selectedYear && selectedFrequency.includes(i.frequency)
    })

    const formatedData = filteredData.map((i: any) => {
      return {
        id: uuid(),
        description: i.description,
        amountFormatted: formatCurrency(Number(i.amount)),
        frequency: i.frequency,
        dateFormatted: formatDate(i.date),
        tagColor: i.frequency === 'eventual' ? '#E44C4E' : '#4E41F0'
      }
    })
    setData(formatedData)
  }, [selectedYear, selectedMonth, selectedFrequency, typeFromUrl])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency)

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(i => i !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency([...selectedFrequency, frequency])
    }
  }

  return (
    <Container>
      <ContentHeader title={typeFromUrl.title} lineColor={typeFromUrl.lineColor}>
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

      <Filters>
        <button 
          type="button"
          className={`tag-filter tag-filter-recurrent
          ${selectedFrequency.includes('recurrent') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('recurrent')}
          >Recurrents
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick('eventual')}
          >Eventual
        </button>
      </Filters>

      <Content>
        
        {
          data?.map((i: any) => (
            <HistoryFinanceTrack 
              key={i.id}
              amount={i.amountFormatted}
              subtitle={i.dateFormatted}
              tagColor={i.tagColor}
              title={i.description}
            />
          ))
        }
        
      </Content>
    </Container>
  )
}

export default List;