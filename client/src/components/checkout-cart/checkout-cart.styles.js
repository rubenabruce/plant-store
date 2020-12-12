import styled, { css } from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: sticky;
  margin-top: 70px;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #FEFEFE;
  top: 0;
  align-items: left;
  right: 0;
  border-radius: 0 0 6px 6px;
  overflow-x: scroll;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

export const EmptyMessage = styled.span`
  margin: 50px auto 0;
  position: relative;
  font-size: 18px;
`;

export const BottomCont = styled.div`
  width: 80%;

  & .total {
    font-size: 24px;
  }
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