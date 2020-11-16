import styled from 'styled-components';

export const SlidingBarCont = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: visible;
  width: 100%;
  height: 100%;
  margin: 42px auto;

  & .menu-item {
    margin: 0 20px;
    min-width: 300px;
  }

  & .horizontal-menu {
    width: 100%;

    & .menu-wrapper {
      height: 100%;

      
    }
    & .scroll-menu-arrow {
        padding: 20px;
        cursor: pointer;

        & .arrow-svg {
          transform: translate(0, -80px)
        }
      }
    

  }
`;