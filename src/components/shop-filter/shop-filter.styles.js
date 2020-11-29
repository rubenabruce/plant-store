import styled from 'styled-components';

import {ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

export const FilterFieldCont = styled.div`
  background-color:white;
`;

export const DownArrowCont = styled(DownArrow)`
  cursor: pointer;
  transition: all 600ms ease-in-out;
`;

export const ShopFilterCont = styled.div`
  width: 18%;
  margin-right: 2%;
  margin-top: 20px;
  height: 700px;
  border-right: solid 2px #bcbcbc;
  top: 0;
  position: relative;
  align-self: flex-start;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    align-self: center;
    border-right: none;
    height: unset;
  }
`;

export const FilterFieldHeaderCont = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  font-size: 22px;
  padding: 20px 0;
  border-bottom: 1px solid #D2D2D2;
  margin-bottom: 20px;  

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FilterOptionsCont = styled.div`
  background-color: white;
  transition: all 1s ease-in-out;
  overflow: hidden;
`;

