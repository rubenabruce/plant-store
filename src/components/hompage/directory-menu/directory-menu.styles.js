import styled from 'styled-components';

export const DirectoryMenuCont = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  justify-content: center;
  align-items: center;

`;

export const BackgroundImageCont = styled.div`
  height: 100%;
  width: 35%;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};


  /* &:hover {
    
    &.background-image {
      transform: scale(1.01);
      transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    &.content {
      opacity: 0.9;
    }
  } */
`;

export const ContentCont = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  text-align: ${({side}) => side};
  align-items: ${({side}) => side};
  justify-content: center;
  width: 30%;
  top: 34%;
  ${({side}) => side}: 8%;
  position: absolute;
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