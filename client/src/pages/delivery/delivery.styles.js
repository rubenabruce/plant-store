import styled from 'styled-components';
import Image from '../../assets/plant-shop-cacti.png'


export const DeliveryPageCont = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
`;

export const DeliveryInfoCont = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InformationCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(30, 74, 22, 0.69);
  color: white;
  text-align: center;
  padding: 5% 10%;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
  & h2 {
    font-size: 36px;
    font-weight: 400;
  }
`;

export const ImageCont = styled.div`
  width: 50%;
  background-image: url(${Image});
  background-position: center;
  background-size: cover;
`;

export const DeliveryMapCont = styled.div`
`;