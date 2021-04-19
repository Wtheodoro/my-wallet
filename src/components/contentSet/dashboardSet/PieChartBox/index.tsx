import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import { Container, LeftSide, IndicatorContainer, Indicator, RightSide } from './styles';

interface IPieChartProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

// Stateless component
const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <LeftSide>
      <h2>Pie Chart</h2>
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
        <PieChart>
          <Pie data={data} labelLine={false} dataKey="percent">
            {
              data.map((i) => (
                <Cell key={i.name} fill={i.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </RightSide>
  </Container>
)

export default PieChartBox;