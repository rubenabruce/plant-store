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