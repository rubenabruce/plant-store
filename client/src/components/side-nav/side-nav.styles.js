import { animated } from 'react-spring';
import styled from 'styled-components';

export const SideNavCont = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  padding: 30px 0;
  background-color: #fefefe;
`;

export const SideNavHeader = styled(animated.div)`
  width: 80%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  margin: auto;
`;

export const ExitCross = styled.div`
  font-size: 26px;  
`;

