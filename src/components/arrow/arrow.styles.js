import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../assets/arrow_left.svg';

const getDirection = ({ direction }) => {
  switch(direction) {
    case 'right':
      return 'rotate(180deg)'
    case 'down':
      return 'rotate(90deg)'
    case 'up' : 
      return 'rotate(270deg)'
    case 'left':
      return ''
    default:
      return ''
  }
}

export const ArrowSvgCont = styled(ArrowSvg)`
  transform: ${getDirection};
`;
