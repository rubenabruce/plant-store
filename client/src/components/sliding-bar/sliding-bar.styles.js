import styled from 'styled-components';

export const SlidingBarCont = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: visible;
  width: 100%;
  height: 100%;
  margin: 42px auto;

  & .menu-item {
    margin: 0 40px;
    min-width: 300px;
    width: 90%;
    
    @media screen and (max-width: 800px) {
      height: 300px;
      min-width: 180px;
      width: 180px;
      font-size: 12px;
      margin: 0 10px;
    }
  }

  & .horizontal-menu {
    width: 100%;

    & .menu-wrapper {
      height: 100%;

      
    }
    & .scroll-menu-arrow {
        padding: 20px;
        cursor: pointer;
        @media screen and (max-width: 800px) {
          display: none;
        }

        & .arrow-svg {
          transform: translate(0, -80px)
        }
      }
    

  }
`;