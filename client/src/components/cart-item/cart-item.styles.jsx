import { animated } from 'react-spring';
import styled from 'styled-components';


export const CartItemCont = styled(animated.div)`
  width: 100%;
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #C4C4C4;
  border-bottom: 1px solid #C4C4C4;

`;

export const ItemCont = styled.img`
  width: ${({itemImageSize}) => itemImageSize ? itemImageSize : 30}%;
`;

export const ItemDetailsCont = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NamePriceCont = styled.span`
  font-size: 16px;
`;