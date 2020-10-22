import styled from 'styled-components';

export const MenuItemCont = styled.div`
  height: 500px;
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;  
  
  &:hover {
    cursor: pointer;
    
    & .background-image {
      transform: scale(1.1);
      transition: all 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.7;
    }
    
    & .background-image-cont {
      background-color: green;
      /* transition: background-color 1s cubic-bezier(0.25, 0.45, 0.45, 0.95); */
    } 
  }
`;

export const ImageContainerCont = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 8px;
`;

export const ImageCont = styled.div`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const ItemFooterCont = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
`;