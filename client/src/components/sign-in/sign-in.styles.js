import styled from 'styled-components';

export const SignInOverlay = styled.div`
  position: relative;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const SignInContainer = styled.div`
  width: 100%; 
  height: 100%;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  background-color: #fefefe;

`;

export const TitleCont = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ButtonsContainer = styled.div`
  margin:  40px auto ;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & .sign-in-button {
    margin-right: 5px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 20px auto;


    & button {
      /* width: 100%; */
      line-height: unset;
      min-width: unset;
    }
  }
`;

export const AlternativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  text-align: center;
  align-items: center;
  
  & span {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
  }
`;