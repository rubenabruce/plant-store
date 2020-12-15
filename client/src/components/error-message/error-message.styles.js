import styled from 'styled-components';

export const ErrorMessageCont = styled.div`
  color: #9e2146 ;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 20px;
  margin-top: 0px;
  width: 100%;
  transform: translateY(-15px);
  opacity: 1;
  animation: fade 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity, transform;


  & svg {
    margin-right: 10px;
  }
`