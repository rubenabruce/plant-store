import styled from 'styled-components';

export const TnCPageCont = styled.div`
  width: 100vw;
`;

export const TnCHeader = styled.h1`
  width: 100%;
  height: 120px;
  background-color: #3EB951;
  color: white;
  text-align: center;
  font-size: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  width: 70%;
  color: black;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const SubHeader = styled.h4`
  margin: 20px 0;
  font-size: 16;
`;

export const Para = styled.p`
  margin: 20px 0;
`;