import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 30px;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  background: #f5ffff;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  th,
  td {
    border: 1px solid grey;
    padding: 7px;
  }

  th {
    color: white;
    background: #1ac0d6;
  }

  tr:nth-child(odd) {
    background: #ebf3f9;
  }
`;
