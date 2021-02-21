import styled from 'styled-components';
import { animated } from 'react-spring';

import CustomButton from '../custom-button/custom-button.component';

export const MenuItemCont = styled(animated.div)`
  height: 450px;
  /* width: 90%; with a filter section */
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 0 auto;

  &:hover {
    & .custom-button {
      min-width: 60px;
      opacity: 1;
      top: -20px;
    }

    & .price {
      top: -33px;
      font-weight: 600;
    }

    & .height {
      top: -33px;
      opacity: 0;
    }

    & .name {
      font-weight: 600;

    }

    cursor: pointer;
    
    & .background-image {
      transform: scale(1.1);
      transition: all 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.7;
      z-index: 1;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 310px;

    &:hover {
      & .custom-button {
        min-width: initial;
        opacity: initial;
        top: initial;
      }

      & .price {
        top: initial;
        opacity: initial;
      }

      & .height {
        top: initial;
        opacity: initial;
      }

      & .name {
        font-weight: initial;
      }

      cursor: initial;
    
      & .background-image {
        transform: initial;
        transition: initial;
        opacity:initial;
      }
    }
  }
`;

export const ImageContainerCont = styled.div`
  width: 100%;
  height: 85%;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 3px;
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
  display: flex;
  flex-direction: column;
  height: 10%;

  & .name {
    margin-top: 12px;
    font-weight: 400;
    transition: all 400ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  & .height-price {
    margin-top: 10px;
    transition: all 400ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
    position: relative;
    padding: 5px 5px 5px 0;
    top: 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .name {
      margin-top: 0;
    }

    & .price {
      margin-top: 0;
      padding: 0;
    }

    & .height {
      display: none;
    }
  }
`;

export const CustomButtonCont = styled(CustomButton)`
  min-width: 0px;
  width: 100%;
  margin-top: 12px;
  font-size: 12px;
  opacity: 0;
  padding: 0;
  position: relative;
  top: 0px;
  transition: all 400ms cubic-bezier(0.25, 0.45, 0.45, 0.95);

  @media screen and (max-width: 800px) {
    opacity: 1;
    font-size: 10px;
    width: 100%;
    height: 35px;
    align-items: center;
  }
`;

export const HeightPriceCont = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OOSLabel = styled.div`
  position: absolute;
  width: 200%;
  font-family: 'Montserrat';
  height: 10%;
  background-color: #4E7B46;
  bottom: 50%;
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