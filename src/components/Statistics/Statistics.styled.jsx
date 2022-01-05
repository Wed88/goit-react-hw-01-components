import styled from 'styled-components';
import { getRandomHexColor } from '../../helpers/randomColor';

export const Container = styled.section`
  margin: 0px auto 30px;
  text-align: center;
  width: 400px;
  border: 1px solid black;
  border-radius: 4px 4px 4px 4px;
`;

export const Title = styled.h2`
  font-weight: 400;
  padding-bottom: 10px;
`;

export const Board = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  background-color: ${props => {
    return getRandomHexColor();
  }};
`;
