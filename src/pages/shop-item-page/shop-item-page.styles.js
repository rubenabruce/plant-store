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
  justify-content: center;
  align-items: center;

  ${FlexCollumnStyles}
`;

export const ShopItemCont = styled.div`
  width: 90%;
  height: 80vh;
  margin: auto;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;

  ${FlexRowStyles}
`;

export const RecommendedContainer = styled.div`
  height: 500px;
  width: 90%;
  padding: 800px auto;

  border-top: 2px solid #bcbcbc;

`;