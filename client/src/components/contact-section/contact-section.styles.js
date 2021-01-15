import styled from 'styled-components';

export const ContactSectionCont = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 800px), (max-width: 1100px) {
    flex-direction: column;
    height: fit-content;
    margin: 60px auto 0 auto;
  }

`;