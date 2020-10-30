import styled from 'styled-components';


export const CollectionDirectoryCont = styled.div`
  width: 100%;
  height: 90vh;
  margin: auto;
  display: flex;
  background-color: white;
`;

export const DirectoryGrid = styled.div`
  height: 90%;
  width: 90%;
  display: grid;
  margin: auto;
  grid-gap: 10px;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(6,1fr);

  & .four {
    grid-row-start: 5;
    grid-row-end: 7;
  }
`;
