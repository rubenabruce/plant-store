import styled from 'styled-components';

export const CollectionDirectoryCont = styled.div`
  width: 90%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);

  & #1 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    background-color: black;
  }

  & #2 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & #3 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & #4 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const CollectionCont = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;

`;