import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: 0px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupCont = styled.div`
  position: relative;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputCont = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 20px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabel};
  }
`;

export const FormInputLabelCont = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 40px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel};
  }
`;