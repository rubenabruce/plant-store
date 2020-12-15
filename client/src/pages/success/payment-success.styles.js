import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PaymentSuccessCont = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3EB951;
  
  & h4 {
    font-weight: 400;
  }
`;

export const PaymentSuccessModel = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #e0e0e0;
`;

export const Group = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const LinkCont = styled(Link)`
  color: white; 
  text-decoration: underline solid 4px white;
  font-size: 22px;
    transition: all ease-in-out 500ms;

  &:hover {
    font-size: 24px;
    color: #a2f780;
    text-decoration: underline solid 4px #a2f780;
  }
`;