import PropTypes from 'prop-types';
import { Container, Board, Title, Item } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Board>
        {stats.map(stat => (
          <Item key={stat.id}>
            <span>{stat.label} </span>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </Board>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
