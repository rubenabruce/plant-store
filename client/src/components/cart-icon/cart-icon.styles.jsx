import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-pot.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  }

  @keyframes shake {
    /* maybe use this animation when an item is added */
    0% { transform: rotate(0); }
    15% { transform: rotate(5deg); }
    30% { transform: rotate(-5deg); }
    45% { transform: rotate(4deg); }
    60% { transform: rotate(-4deg); }
    75% { transform: rotate(2deg); }
    85% { transform: rotate(-2deg); }
    92% { transform: rotate(1deg); }
    100% { transform: rotate(0); }

  }
`;

export const ShoppingIconCont = styled(ShoppingIcon)`
  width: 28px;
  height: 28px;
  
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 15px;
`;