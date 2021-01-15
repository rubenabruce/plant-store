import styled from 'styled-components';
import { animated } from 'react-spring';

export const InstagramSectionCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 800px), (max-width: 1100px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

export const TitleCont = styled.h2`
  margin-bottom: 20px;

  & a {
    color: #65A15A;
    transition: color .25s ease-out,color .25s ease-out;


    &:hover {
      color: #4e7b46;
    }
  }
`;

export const InstafeedCont = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 20px;
  
  & img {cursor: pointer;}

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 35px;

    & img {
      width: 100%;
    }

  }
`;

export const InstaImage = styled(animated.img)`

  @media screen and (max-width: 1100px) {
    margin: auto;
  }
`;