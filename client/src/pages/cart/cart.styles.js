import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const CheckoutPageCont = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  justify-content: center;
  
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderCont = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
  
`;

export const HeaderBlockCont = styled.div`
  text-transform: capitalize;
  width: 23%;

  @media screen and (max-width: 800px) {
    width: unset;
  }

  &:last-child {
    width: 8%;

    @media screen and (max-width: 800px) {
      width: unset;
    }
  }
`;

export const TotalCont = styled.div`
  margin-top: 30px;
  font-size: 36px;
  display: flex;
  width:100%;
  justify-content: space-between;
`;

export const TestWarningCont = styled.div`
  color: red;
  text-align: center;
  margin-top: 40px;
`;

export const CustomButtonCont = styled(CustomButton)`
  width: 100%;
  margin-bottom: 100px;

`;