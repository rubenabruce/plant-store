import styled from 'styled-components';

export const FeaturedSectionCont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  margin: 100px auto;

  @media screen and (max-width: 800px) {
    margin: 50px auto;
  }
`;