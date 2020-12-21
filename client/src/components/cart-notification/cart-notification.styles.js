import styled from 'styled-components';
import { animated } from 'react-spring';

export const CartNotificationCont = styled(animated.div)`
  height: 83px;
  width: 100vw;
  background-color: #3EB951;
  position: absolute;
  z-index: 100;
`;

export const CartNotificationItems = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  margin: auto;
`;

export const ItemName = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ExitContatiners = styled.div`
`;

export const ViewCartBtn = styled.button`
  background-color: transparent;
  border: white 1px solid;
  padding: 10px;
  border-radius: 8px;  
  color: white;
  font-family: 'Montserrat';

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ExitBtn = styled.button`
  color: white;
  border: none;
  font-family: 'Montserrat';
  font-size: 24px;
  padding: 10px;
  margin-left: 20px;
  background-color: transparent;
`;