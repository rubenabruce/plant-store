import styled, {css} from 'styled-components';

const StyledWidth = css`
  width: 23%
`;

export const CheckoutItemCont = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;`;

export const ImageContainerCont = styled.div`
  width: 23%;
  padding-right: 15px;
    
  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameCont = styled.span`
  ${StyledWidth}
`;

export const QuantityCont = styled.span`
  padding-left: 20px;
  display: flex;
  ${StyledWidth}
`;

export const ArrowCont = styled.div`
  cursor: pointer;
`;

export const ValueCont = styled.span`
  margin: 0 10px;
`;

export const PriceCont = styled.span`${StyledWidth}`;

export const RemoveButtonCont = styled.div`
  padding-left: 12px;
  cursor: pointer;
 `;
