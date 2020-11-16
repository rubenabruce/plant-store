import styled from 'styled-components';

export const InstagramSectionCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
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
`;