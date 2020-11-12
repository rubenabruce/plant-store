import styled, { css } from 'styled-components';

const FlexCollumnStyles = css`
  display: flex;
  flex-direction: column;
`;

const FlexRowStyles = css`
  display: flex;
  flex-direction: row;
`;

export const ShopItemPageCont = styled.div`
  width: 100%;
  height: 95vh;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  margin: 80px 0;

  ${FlexCollumnStyles}
`;

export const ShopItemCont = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;

  ${FlexRowStyles}
`;

export const RecommendedContainer = styled.div`
  /* height: 400px; */
  width: 100%;
  margin: 60px auto;
  background-color: grey;
  border-top: 3px solid #bcbcbc;

`;