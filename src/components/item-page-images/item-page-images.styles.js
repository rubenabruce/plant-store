import styled from 'styled-components';

export const ItemImagesCont = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 25px;
  }

`;

export const MainImageCont = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.img`
  max-height: 100%;
  width: 100%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 800px) {
    padding-bottom: 15px;
  }
`;

export const OtherImagesNavCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 18%;

  @media screen and (max-width: 800px) {
    height: 100px;
  }
`;

export const OtherImagesCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  align-items: center;
`;

export const OtherImage = styled.img`
  height: 100%;
  margin: auto 10px;
  cursor: pointer;

  &:first-child {
    margin: auto 10px auto 0;
  }

  &:last-child {
    margin: auto 0 auto 10px;
  }
`; 