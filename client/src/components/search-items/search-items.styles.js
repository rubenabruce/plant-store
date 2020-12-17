import styled from 'styled-components';
import { animated } from "react-spring";

export const CollectionSearchCont = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  text-align: center;
  justify-content: center;

  & span {
    font-size: 24px;
    margin-bottom: 10px;
  }

  & input {
    margin-bottom: 30px;
    font-size: 19px;
    font-family: 'Montserrat';

  }
`;