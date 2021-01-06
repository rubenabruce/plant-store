import styled from 'styled-components';

export const ContactSectionCont = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: unset;
    margin: 60px auto 0 auto;
  }
`;