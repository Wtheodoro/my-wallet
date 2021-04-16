import React from 'react';
// import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import { Container, LeftSide, IndicatorContainer, Indicator, RightSide } from './styles';

// Stateless component
const PieChart: React.FC = () => (
  <Container>
    <LeftSide>
      <h2>Negro</h2>
      <IndicatorContainer>
        <Indicator backgroundColor="#F7931B">
          <div>45%</div>
          <span>Incomes</span>
        </Indicator>
        <Indicator backgroundColor="#E44C4E">
          <div>55%</div>
          <span>Expenses</span>
        </Indicator>
      </IndicatorContainer>
    </LeftSide>

    {/* <RightSide>
      <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={[]}
            labelLine={false}
            dataKey="percent"
          />
        </PieChart>
      </ResponsiveContainer>
    </RightSide> */}
  </Container>
)

export default PieChart;