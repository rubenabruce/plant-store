import styled from 'styled-components';

export const ItemImagesCont = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .awssld {
    height: 100%;

    --organic-arrow-color: #4e7b46;
    --control-bullet-color: #4e7b46;
    --control-bullet-active-color: #65a15a;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 45px;
    height: 60vh;
  }

`;

export const MainImageCont = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Images = styled.div`
  max-height: 100%;
  margin: 0 auto 0 0;
  position: relative;

  @media screen and (max-width: 800px) {
    padding-bottom: 15px;
    width: 100%;
    margin: auto;
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
  /* overflow-x: scroll; */
  align-items: center;
`;

export const OtherImage = styled.img`
  height: 100%;
  margin: auto 10px;
  cursor: pointer;

  &:first-child {
    margin: auto 10px auto 0;
  }

  /* @media screen and (max-width: 800px) {
   &:last-child {
      margin: auto 0 auto 10px;
    }
  }   */
`;