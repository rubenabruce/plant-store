import styled from 'styled-components';

export const CheckoutPageCont = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }

`;

export const CheckoutFormsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;