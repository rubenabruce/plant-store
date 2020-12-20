import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const getOtherStyles = props => {
  if (props.otherstyles) {
    return props.otherstyles
  } 
}

export const ContactUsCont = styled.form`

  width: 50%;
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  ${getOtherStyles}

  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 70px;
  }
`;

export const ContactHeaderCont = styled.h2`
  font-size: 36;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

export const ContactPara = styled.p`

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
    text-align: center;
  }
`;

export const NameEmailCont = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 80px auto auto;

  @media screen and (max-width: 800px) {
    margin: auto;
  }
`;

export const FormInputCont = styled(FormInput)`
  
  @media screen and (max-width: 800px) {
    /* width: 90%;           */
  }
`;

export const MessageInputCont = styled.textarea`
  width: 90%;
  height: 140px;
  border: 1px solid grey;
  font-family: 'Montserrat';
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto 20px auto;
`;


export const CustomButtonCont = styled(CustomButton)`
  width: 90%;
  margin: auto auto 0 auto;
`;
