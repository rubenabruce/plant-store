import styled from 'styled-components';
import { animated } from 'react-spring';


export const AccountDropdownCont = styled(animated.div)`
  width: 200px;
  right: 10%;
  top: 100%;
  position: absolute;
  background-color: #F1F1F1;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    right: 0;
  }
`;

export const ContentCont = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;


export const OptionCont = styled.span`
  width: 100%;
  text-align: center;
  font-size: 14;
  font-weight: 400;
  cursor: pointer;
`; 
