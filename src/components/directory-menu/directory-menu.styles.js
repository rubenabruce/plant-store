import styled, { css } from 'styled-components';

const HalfContainerStyles = css`
  width: 50%;
  height: 90%;
  transition: all 10s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;


export const DirectoryMenuCont = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
`;


export const LeftCont = styled.div`
  ${HalfContainerStyles}
  left: 0;

  &:hover {
    & ~ .images-container {
      & .image-cont-left {
        width: 700px;
      }
    }
  }

`;

export const RightCont = styled.div`
  ${HalfContainerStyles}
  right: 0;

  &:hover {
    & ~ .images-container {
      & .image-cont-right {
        width: 700px;
      }
    }
  }
`;

export const ImagesContainer = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  overflow: hidden;

  & .image-cont-left {
    &:hover {
      width: 800px;
    }
  }

  & .image-cont-right {
    &:hover {
      width: 800px;
    }
  }
`;

export const ImageSideCont = styled.div`
  overflow: hidden;
  transition: all 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  width: 350px;
  height: 100%;
`;

export const BackgroundImageCont = styled.img`
  width: 700px;
  float: ${({side}) => side};
  bottom: 0;
  position: relative;
`;

export const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${({side}) => side};
  align-items: ${({side}) => side};
  justify-content: center;
  width: 50%;
  top: 30%;
  ${({side}) => side}: 10%;
  position: relative;
  z-index: 10;
`;

export const TitleCont = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 38px;
  color: #4a4a4a;
`;

export const SubtitleCont = styled.span`
  font-weight: lighter;
  font-size: 16px;
  margin-bottom: 20px;
`;

