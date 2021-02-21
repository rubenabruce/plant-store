import styled, {css} from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as BinSvg } from "../../assets/bin.svg";

const CheckoutOptionsStyles = css`
  font-weight: 400;
  text-align: left;
  align-items: flex-end;
  padding: 0;

  & .item-name {
    justify-content: flex-end;
  }
`;

const getCheckoutStyles = (props) => {
  console.log(props)
  return props.checkoutOptions ? CheckoutOptionsStyles : '';
}

export const CartItemCont = styled(animated.div)`
  width: 100%;
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #C4C4C4;
  border-bottom: 1px solid #C4C4C4;
`;

export const ItemCont = styled.img`
  width: ${({itemImageSize}) => itemImageSize ? itemImageSize : 30}%;
`;

export const ItemDetailsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px 20px;
  font-weight: 600;
  ${getCheckoutStyles}

`;

export const NamePriceCont = styled.span`
  font-size: 16px;
  font-weight: inherit;
`;

export const RowCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BinCont = styled(BinSvg)`

`;

export const QuantityCont = styled.span`
  display: flex;
  width: 20%;
`;

export const ArrowCont = styled.div`
  cursor: pointer;
`;

export const ValueCont = styled.span`
  margin: 0 10px;
`;
