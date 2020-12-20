import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    position: absolute;
    left: 40%;
  }
`;

export const LogoImg = styled.img`
  height: 70%;
`;