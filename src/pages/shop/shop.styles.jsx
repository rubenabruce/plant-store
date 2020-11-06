import styled from 'styled-components';

export const ShopPageCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const ShopMainCont = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ShopGridCont = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
`;

export const ShopFilterCont = styled.div`
  width: 18%;
  margin-right: 2%;
  height: 700px;
  background-color: grey;
  top: 0;
  position: relative;
  align-self: flex-start;
`;