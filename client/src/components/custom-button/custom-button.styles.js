import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #65A15A;
  color: white;
  border: none;

  &:hover {
    background-color: #4e7b46;

  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

const getOtherStyles = props => {
  return props.otherstyles ? props.otherstyles : '';
}

export const CustomButtonContainer = styled(animated.button)`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  transition: background-color .25s ease-out,color .25s ease-out;
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  ${getButtonStyles}
  ${getOtherStyles}
`;
