import styled from 'styled-components';

import {ReactComponent as DownArrow } from '../../assets/down-arrow.svg';

export const ShopPageCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

export const ShopPageHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  align-items: flex-end;
  border-bottom: 1px solid #A7A7A7;
  padding-bottom: 15px;
  margin-bottom: 20px;

  & .collection-type {
    font-size: 22px;
    /* font-weight: 600; */
  }

  & .sort-by {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ShopMainCont = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ShopGridCont = styled.div`
  width: 80%;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 62px;
  row-gap: 72px;
`;

export const ShopFooterCont = styled.div`
  padding: 90px 0;
  width: 80%;
  text-align: center;
  margin-left: auto;
  font-size: 26px;
`; 

export const DownArrowCont = styled(DownArrow)`
  cursor: pointer;
`;