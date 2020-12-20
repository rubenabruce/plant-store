import styled from 'styled-components';
import { animated } from 'react-spring';

export const CartNotificationCont = styled(animated.div)`
  height: 83px;
  width: 100vw;
  background-color: #3EB951;
`;

export const CartNotificationItems = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
`;

export const ItemName = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const ViewCartBtn = styled.btn`
  background-color: transparent;
  border: white 1px solid;
  border-radius: 8px;  
`;