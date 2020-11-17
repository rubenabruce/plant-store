import styled, { css } from 'styled-components';

import CustomButton from '../../components/custom-button/custom-button.component';

const FlexCollumnStyles = css`
  display: flex;
  flex-direction: column;
`;

const FlexRowStyles = css`
  display: flex;
  flex-direction: row;
`;

export const ItemDetailsCont = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  font-size: 18px;
  width: 52%;
  height: 100%;
  ${FlexCollumnStyles}

  @media screen and (max-width: 800px) {
    width: 100%;  
  }
`;

export const ItemName = styled.h2`
  font-size: 38px;
  padding-bottom: 10px;
  border-bottom: solid 1px #bcbcbc;
  width: 100%;
  text-align: left;  
  
`;

export const ItemPrice = styled.h3`
  font-size: 36px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`

export const ItemSizes = styled.div`
  justify-content: space-between;
  width: 80%;
  ${FlexRowStyles}

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const ItemDesc = styled.p`
  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const CustomButtonCont = styled(CustomButton)`
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: #00C236;
  font-size: 24px;
  @media screen and (max-width: 800px) {
    margin: 10px 0;
    height: unset;
    font-size: 20px;
  }
`;

export const QuantityCont = styled.div`
  ${FlexRowStyles}

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const QuantityAdjustCont = styled.span`
  padding-left: 20px;
  ${FlexRowStyles}
`;

export const ArrowCont = styled.div`
  cursor: pointer;
`;

export const ValueCont = styled.span`
  margin: 0 10px;
  font-weight: 600;
`;

export const CareInstructionCont = styled.div`
  font-size: 20px;

  @media screen and (max-width: 800px) {
    margin: 10px 0;
    font-size: 18px;


    & h2 {
      font-weight: 400;
      margin-bottom: 6px;
    }
  }
`;