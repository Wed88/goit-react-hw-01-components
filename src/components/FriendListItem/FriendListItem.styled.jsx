import styled from 'styled-components';

export const Box = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  margin-left: 15px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};
`;
