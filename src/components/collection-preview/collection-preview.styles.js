import { animated } from 'react-spring';
import styled from 'styled-components';

export const CollectionPreviewCont = styled.div`
  margin: auto;
  width: 80%;
`;

export const TitleCont = styled.h1`
  padding-top: 40px;
  margin: auto;
  width: 90%;
  font-weight: 400;
  /* display: none; */
`;

export const PreviewCont = styled(animated.div)`
  display: grid; 
  height: 70vh;
  margin: auto;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(2,1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  /* border-top: solid 3px #bcbcbc; */
  padding: 15px 0 0 0;
`;
