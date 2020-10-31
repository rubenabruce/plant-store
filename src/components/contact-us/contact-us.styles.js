import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

export const ContactUsCont = styled.form`
  width: 50%;
  display: flex;
  height: 500px;
  flex-direction: column;
`;

export const ContactHeaderCont = styled.h2`
  font-size: 36;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;

export const NameEmailCont = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 80px auto auto;
`;

export const FormInputCont = styled(FormInput)`

`;

export const MessageInputCont = styled.textarea`
  width: 90%;
  height: 200px;
  border: 1px solid grey;
  font-family: 'Montserrat';
  font-size: 18px;
  padding: 10px;
  border-radius: 18px;
  margin: 0 auto auto auto;
`;


export const CustomButtonCont = styled(CustomButton)`
  width: 90%;
  margin: auto auto 0 auto;
`;
