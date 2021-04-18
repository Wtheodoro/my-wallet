import React from 'react';
import { Container, Tag } from './styles';

interface IHistoryFunanceTrackProps {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

// Stateless component
const HistoryFinanceTrack: React.FC<IHistoryFunanceTrackProps> = ({
  tagColor,
  title,
  subtitle,
  amount
}) => (
  <Container>
    <Tag color={tagColor}/>
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
)

export default HistoryFinanceTrack;