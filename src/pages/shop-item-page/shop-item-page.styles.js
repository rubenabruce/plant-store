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
  padding-bottom: 200px;  
  ${FlexCollumnStyles}
`;

export const ShopItemCont = styled.div`
  width: 90%;
  height: 75vh;
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
  border-top: 1px solid black;

  & h3 {
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    padding-top: 32px;
  }
`;