import styled from 'styled-components';

export const SignUpOverlay = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: scroll;
  left: 0;
`;

export const SignUpContainer = styled.div`
  width: 40vw; 
  border-radius: 20px;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #fefefe;
  top: 10vh;

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 10px;
  }
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
      width: 100%;
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

  & span {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    padding-bottom: 20px;
  }
`;