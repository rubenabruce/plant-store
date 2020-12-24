import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

const itemOne = css`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const itemTwo = css`
  grid-row-start: 1;
  grid-row-end: 3;

`;

// const itemThree = css`
//   grid-row-start: 2;
//   grid-row-end: 3;
//   grid-column-start: 3;
//   grid-column-end: 3;
// `;

// const itemFour = css`
//   grid-row-start: 2;
//   grid-row-end: 3;
//   grid-column-start: 4;
//   grid-column-end: 4;
// `;

// const itemFive = css`
//   grid-row-start: 2;
//   grid-row-end: 3;
//   grid-column-start: 4;
//   grid-column-end: 4;
// `;

const getStyles = ({ gridid }) => {
  switch (gridid) {
    case '01': 
      return itemOne;
    case '02':
      return itemTwo;
    default:
      return '';
  }
}

const getOtherStyles = (props) => {
  return props.otherStyles ? props.otherStyles : '';
}

export const CollectionItemCont = styled(animated.div)`
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-color: grey;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  cursor: pointer;

  ${getStyles}

  ${getOtherStyles}

  &:hover {
    background-blend-mode: multiply;

    .collection-item-content {
      opacity: 1;
    }
  }
`;

export const CollectionItemContent = styled.div`
  opacity: 0;
  border: 3px solid white;
  transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 20%;
`;