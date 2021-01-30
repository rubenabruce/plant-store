import styled from 'styled-components';

export const ItemImagesCont = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .awssld {
    height: 100%;

    --organic-arrow-color: #4e7b46;
    --control-bullet-color: #65a15a;
    --control-bullet-active-color: #4e7b46;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 45px;
    height: 60vh;
  }

`;

export const Images = styled.div`
  max-height: 100%;
  margin: 0 auto 0 0;
  position: relative;

  @media screen and (max-width: 800px) {
    padding-bottom: 15px;
    width: 100%;
    margin: auto;
  }
`;
