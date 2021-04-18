import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'
import formatCurrency from '../../../../utils/formatCurrency';
import { Container, LeftSide, RightSide, IndicatorContainer, Indicator } from './styles';

interface IBarChartProps {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

// Stateless component
const BarChartBox: React.FC<IBarChartProps> = ({ title, data}) => (
  <Container>
    <LeftSide>
      <h2>{title}</h2>
      <IndicatorContainer>
        {
          data?.map(i => (
            <Indicator backgroundColor={i.color} key={i.name}>
              <div>{i.percent}%</div>
              <span>{i.name}</span>
            </Indicator>
          )) 
        }
      </IndicatorContainer> 
    </LeftSide>

    <RightSide>
      <ResponsiveContainer>
        <BarChart data={data}>
        <Tooltip formatter={ formatCurrency } cursor={{ fill: 'none'}}/>
          <Bar dataKey="amount" name="Amount">
            {
              data.map((i) => (
                <Cell 
                  key={i.name}
                  fill={i.color}
                />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </RightSide>
  </Container>
)

export default BarChartBox;