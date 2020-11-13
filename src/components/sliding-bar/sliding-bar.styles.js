import styled from 'styled-components';

export const SlidingBarCont = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: visible;
  width: 100%;
  height: 100%;
  margin: 80px auto;

  & .menu-item {
    margin: 0 20px;
    min-width: 300px;
  }
`;