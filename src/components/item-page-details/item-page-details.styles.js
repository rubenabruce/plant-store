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

const ItemSectionStyles = css`
  width: 48%;
  height: 100%;
  ${FlexCollumnStyles}
`;

export const ItemDetailsCont = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  font-size: 24px;
  ${ItemSectionStyles}
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
`

export const ItemSizes = styled.div`
  justify-content: space-between;
  width: 80%;
  ${FlexRowStyles}
`;

export const CustomButtonCont = styled(CustomButton)`
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: #00C236;
  font-size: 24px;
`;

export const QuantityCont = styled.div`
  ${FlexRowStyles}
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
`;