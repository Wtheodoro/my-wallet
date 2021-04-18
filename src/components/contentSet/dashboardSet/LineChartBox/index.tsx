import React from 'react';
import formatCurrency from '../../../../utils/formatCurrency'
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'
import { Container, Header, IndicatorContainer, Indicator } from './styles';

interface ILineChartBoxProps {
  data: {
    month: string
    entryAmount: number
    outputAmount: number
  }[]

  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const LineChartBox: React.FC<ILineChartBoxProps> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
  <Container>
    <Header>
      <h2>Balance history</h2>

      <IndicatorContainer>
        <Indicator backgroundColor={lineColorAmountEntry}>
          <div></div>
          <span>Incomes</span>
        </Indicator>
        <Indicator backgroundColor={lineColorAmountOutput}>
          <div></div>
          <span>Expenses</span>
        </Indicator>
      </IndicatorContainer>
    </Header>

    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" stroke="#CECECE"/>
        <XAxis dataKey="month" stroke="#CECECE" />
        <Tooltip formatter={ formatCurrency }/>
        <Line 
          type="monotone"
          dataKey="outputAmount"
          name="Expenses"
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line 
          type="monotone"
          dataKey="entryAmount"
          name="Incomes"
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
)

export default LineChartBox;