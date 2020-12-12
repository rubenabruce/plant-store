import styled from 'styled-components';

export const CheckoutFormCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const FormCont = styled.form`
  width: 70%;
  margin-top: 70px;
  margin-left: 100px;


  input,
.StripeElement {
  display: block;
  margin: 10px 0 20px 0;
  max-width: 100%;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
}

input::placeholder {
  color: #aab7c4;
}

input:focus,
.StripeElement--focus {
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
    rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
}
`;

export const SectionCont = styled.div`
  width: 70%;
  margin-top: 70px;
  margin-left: 100px;

`;


export const SectionHeader = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const SectionPara = styled.p`
  font-size: 18px;
`;

export const ButtonCont = styled.button`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
  box-shadow: -2px 4px 11px 0px;
  background-color: #65A15A;
  color: white;
  border: none;
  transition: background-color .25s ease-out,color .25s ease-out;
  min-width: 165px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-family: 'Montserrat';

  &:hover {
    background-color: #4e7b46;

  }
`;