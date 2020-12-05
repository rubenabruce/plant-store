import styled from 'styled-components';
import { animated } from 'react-spring';


export const CartDropdownContainer = styled(animated.div)`
  position: fixed;
  width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #FEFEFE;
  top: 0;
  align-items: center;
  right: 0;
  z-index: 5;
  border-radius: 0 0 6px 6px;
  box-shadow: -2px -2px;
  overflow-x: scroll;
`;

export const CartHeader = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CartHeaderH2 = styled.h2`

`;

export const CartHeaderExit = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  font-size: 22px;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyMessage = styled.span`
  margin: 50px auto 0;
  position: relative;
  font-size: 18px;
`;

export const BottomCont = styled(animated.div)`
  width: 100%;
`;

export const SubTotalCont = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
