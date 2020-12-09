import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

export const UserDetailsCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;


export const SectionCont = styled.div`
  width: 70%;
  margin-top: 70px;
  margin-left: 100px;

  & textarea {
    box-shadow: -2px 4px 11px 0px;
    border: none;
    width: 100%;
    height: 200px;
    padding:10px 10px 10px 5px;
    margin: 25px 0;
  }
`;

export const SectionHeader = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SectionPara = styled.p`
  font-size: 18px;
`;

export const FormInputCont = styled(FormInput)`
  box-shadow: -2px 4px 11px 0px;

  &:focus ~ .form-input-label {
    top: -16px;

  }

  & ~ .form-input-label {
    top: 12px;
  }

  & ~ .shrink{
    top: -16px;
}

`;

export const CustomButtonCont = styled(CustomButton)`
  width: 70%;
  margin-left: 100px;
  margin-top: 40px;
  margin-bottom: 60px;
  box-shadow: -2px 4px 11px 0px;

`;