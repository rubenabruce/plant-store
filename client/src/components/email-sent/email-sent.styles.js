import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const EmailSentCont = styled.div`
  width: 100%;  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;

  @media screen and (max-width: 800px) {
    margin-top: 80px;
  }
`;

export const EmailSentHeader = styled.span`
  font-size: 26px;
  text-align: center;
`;

export const EmailSentP = styled.span`
  font-size: 24px;
  text-align: center;
  font-weight: 300;
`;


export const CustomButtonCont = styled(CustomButton)`
  width: 90%;
  margin: 0 auto;
`;
