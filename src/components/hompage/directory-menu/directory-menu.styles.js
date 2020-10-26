import styled from 'styled-components';

export const DirectoryMenuCont = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  justify-content: center;
  align-items: center;

  & .half-container-right {
    width: 50%;
    height: 90%;

    &:hover {

      width: 70%;
      transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      .half-container-left {
        width:  30%;
        transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }


      .container-right {
        width: 600px;
        transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      
      .container-left {
        width: 1px;
        transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

    
    }
  }

  & .half-container-left {
    width: 50%;
    height: 90%;

    &:hover {

      .container-left {
        width: 600px;
        transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      .container-right {
        width: 1px;
        transition: all 30s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }


    }
  }
`;

export const BackgroundImageCont = styled.img`
  height: 100%;
  /* width: 36vw; */
  overflow: hidden;
  /* ${({side}) => side}: 0; */
  position: absolute;
  /* width: 600px; */
  /* background-position: ${({side}) => side};
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}; */
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

export const BackgroundImageContainersCont = styled.div`
  width: 300px;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* margin-${({side}) => side}: auto; */
`;

