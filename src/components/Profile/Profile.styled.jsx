import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
  padding-top: 15px;
  
  width: 300px;
  text-align: center;
   background: #f5f4fa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
}
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #757575;
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: #757575;
`;

export const BoardStats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background: #a5e0f2;
  padding: 5px;
  margin-top: 10px;
`;

export const StatList = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StatTitle = styled.span`
  color: #757575;
  font-size: 14px;
`;

export const StatDesk = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
