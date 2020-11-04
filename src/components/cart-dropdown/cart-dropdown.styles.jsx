import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 7.8vh;
  right: 40px;
  z-index: 5;
  border-radius: 0 0 6px 6px;
  box-shadow: 3px 2px grey;
  z-index: 1;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const EmptyMessage = styled.span`
  margin: 50px auto 0;
  position: relative;
  font-size: 18px;
`;