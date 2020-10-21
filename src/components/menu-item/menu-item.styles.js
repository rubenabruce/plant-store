import styled from 'styled-components';

export const MenuItemCont = styled.div`
  height: 400px;
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const ImageCont = styled.div`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
`;

export const ItemFooterCont = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
`;