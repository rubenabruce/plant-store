import styled from 'styled-components';

import FormInput from '../form-input/form-input.component';

export const ContactUsCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const ContactHeaderCont = styled.h2`
  font-size: 36;
  font-weight: 400;
  text-align: center;
  width: 100%;
  margin-bottom: 78px;

`;

export const NameEmailCont = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 68px;
`;

export const FormInputCont = styled(FormInput)`
  width: 33%;
`;

export const MessageInputCont = styled.input`
  width: 90%;
  height: 500px;
  border: 1px solid black;
  border-radius: 18px;
`;

