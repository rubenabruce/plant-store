import styled from 'styled-components';

export const CollectionPreviewCont = styled.div`
  margin: auto;
`;

export const TitleCont = styled.h1`
  padding-top: 40px;
  margin: auto;
  width: 90%;
  display: none;
`;

export const PreviewCont = styled.div`
  display: grid; 
  width: 90%;
  height: 70vh;
  margin: auto;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  border-top: solid 3px #bcbcbc;
  padding: 40px 0 40px 0;
`;
