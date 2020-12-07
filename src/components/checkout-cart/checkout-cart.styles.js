import styled, { css } from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: relative;
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
  box-shadow:-3px 0px 3px 0px;
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

export const BottomCont = styled.div`
  width: 100%;
`;

const SectionDetailsStyles = css`
  display: flex;
  margin: 20px 0;
  width: 100%;  
  padding: 20px 0;
  border-bottom: 1px solid #C4C4C4;
`;

export const SectionDetails = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${SectionDetailsStyles}
`;

export const SectionDetailsCollumn = styled.div`
  flex-direction: column;
  ${SectionDetailsStyles}
`;

export const DetailsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;