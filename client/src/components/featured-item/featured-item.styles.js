import styled from 'styled-components';
import { animated } from 'react-spring'; 

import CollectionItem from '../collection-item/collection-item.component';

import CustomButton from '../custom-button/custom-button.component';

const ifEven = (id) => {
  if (id%2 === 0) {
    return true;
  } else {
    return false;
  }
}

export const FeaturedItemCont = styled(animated.div)`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: ${props => ifEven(props.id) ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContentCont = styled.div`
  width: 45%;
  height: 40%;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: ${props => ifEven(props.id) ? 'right' : 'left'};
  align-items: ${props => ifEven(props.id) ? 'flex-end' : 'flex-start'};
  
  @media screen and (max-width: 800px) {
    width: 90%;
    text-align: center;
    align-items: center;
  }
`;

export const ImageCont = styled(CollectionItem)`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TitleCont = styled.h1`
  font-weight: normal;
  padding-bottom: 34px;
  font-size: 46px;

  @media screen and (max-width: 800px) {
    font-size: 36px; 
  }
`;

export const ParagraphCont = styled.p`
  font-weight: lighter;
  font-size: 24px;
`;

export const CustomButtonCont = styled(CustomButton)`
  width: 60%;
  margin-top: 33px;
  height: 30%;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

