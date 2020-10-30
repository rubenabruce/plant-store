import styled, {css} from 'styled-components';

const backgroundImageCss = css`
  background-size: cover;
  background-position: center;
`;

export const CollectionCont = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${({backgroundImage}) => backgroundImage});
  ${backgroundImageCss}
  transition: opacity 1.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 28px;
  overflow: hidden;


  &:hover {
    cursor: pointer;
    
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.one {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  &.two {
    grid-column-start: 1;
    grid-row-start: 4;
    grid-row-end: 7;
  }

  &.three {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  &.four {
    grid-column-start: 2;
    grid-row-start: 5;
    grid-row-end: 7;
    background-color: transparent;
  }
`;

export const BackgroundImageCont = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentCont = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  opacity: 0.7;
  background-color: white;
  position: absolute;
`;

export const TitleCont = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleCont = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;