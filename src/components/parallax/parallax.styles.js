import styled from 'styled-components';

export const ParallaxImage = styled.div`
  height: 40vh;
  margin: 100px 0;
  width: 100%;
  background: url(${({imageUrl}) => imageUrl}) no-repeat top center fixed;
  background-size: cover;
  position:relative;
  background-blend-mode: darken;
  color: white;
  display: flex;

  &::after {
    content: "";
    background-color: black;
    opacity: 0.3;
  }
`;

export const ContentCont = styled.div`
  margin: auto;
  position: relative;
  font-size:24;
  line-height: 2;
  text-align: center;
`;