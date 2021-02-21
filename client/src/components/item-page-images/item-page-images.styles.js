import styled from 'styled-components';

export const ItemImagesCont = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .awssld {
    height: 100%;

    --organic-arrow-color: #4e7b46;
    --control-bullet-color: #65a15a;
    --control-bullet-active-color: #4e7b46;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 45px;
    height: 60vh;
  }

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

export const OOSLabel = styled.div`
  position: absolute;
  width: 200%;
  font-family: 'Montserrat';
  height: 10%;
  background-color: #4E7B46;
  right: -50%;
  bottom: 50%;
  top: 50%;
  margin: auto;
  display: flex;
  transform: rotate(45deg);
  font-size: 20px;
  font-weight: 600;
  color: white;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  z-index: 10;
`;