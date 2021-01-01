import styled from 'styled-components';
import { animated } from 'react-spring';

import { Link } from 'react-router-dom';

export const FooterCont = styled(animated.div)`
  background-color: #1F3323;
  width: 100vw;
  position: static;
  bottom: 0;
  right: 0;
  height: 160px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: unset;
  }
`;

export const NavCont = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  @media screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column;
    margin: 0 auto 10px;
    
  }
`;

export const InstaCont = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: white;
  flex-direction: column;
  margin-left: auto;

  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 25px auto;
    text-align: center;
  }
`;

export const LinkCont = styled(Link)`
  font-size: 16;
  color: white;
  transition: color .25s ease-out,color .25s ease-out;

  &:hover {
    color: #65A15A;
  }

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const TitleCont = styled.h2`
  margin-bottom: 20px;
  color: white;
  text-align: left;

  & a {
    color: #65A15A;
    transition: color .25s ease-out,color .25s ease-out;
    text-align: left;


    &:hover {
      color: #4e7b46;
    }
  }

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;