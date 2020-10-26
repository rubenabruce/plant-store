import styled from 'styled-components';

export const ParallaxImage = styled.div`
  height: 30vh;
  width: 100%;
  background: url(${({imageUrl}) => imageUrl}) no-repeat top center fixed;
  background-size: cover;
  position:relative;
  background-blend-mode: darken;
  color: white;

  &::after {
    content: "";
    /* add a layer which darkens the background image so that text is easier to read, maybe some sort of viniete effect */
  }

`;

export const ReviewCont = styled.span`
  margin: auto;
  position: relative;
  font-size:24;
`;