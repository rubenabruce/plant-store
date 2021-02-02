import styled from 'styled-components';

import FormInput from '../form-input/form-input.component';

export const AdminNewItemCont = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NewItemForm = styled.form`
  width: 60%;
  margin-bottom: 40px;
`;

export const AddNewItemHeader = styled.h2`
  width: 90%;
  margin: 40px auto auto;
`;

export const FormInputCont = styled(FormInput)`
  & ~ label {
     top: 18px;
  }
`;

