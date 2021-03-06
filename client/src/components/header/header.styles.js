import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import {ReactComponent as UserCircleFilled} from '../../assets/user-circle-filled.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg'; 


export const HeaderContainer = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  background-color: #fefefe;
  border-bottom: 1px solid grey;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  z-index:20;
`;

export const NavContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 70%;
`;

export const BurgerBtnCont = styled.img`
  display: none;
  height: 70%;

  @media screen and (max-width: 800px) {
    display: inline-block;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* width: 8%; */
  align-items: center;
  & .active {
    
    & .account-icon-head {

      fill: #784421 !important;
    }
    & .account-icon-body {

      fill: #65a15a !important;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 30px;

  @media screen and (max-width: 800px) {
    margin: 0 10px;
  }
`;

const IconsStyles = css`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.320, 1.275);
`;

export const SearchIconCont = styled(SearchIcon)`
  ${IconsStyles}
`;

export const AccountIconCont = styled(UserCircleFilled)`
  height: 34px;
  margin: 0px 30px;

  @media screen and (max-width: 800px) {
    margin: 0 10px;
  }

  & .account-icons-svg-path {
    ${IconsStyles}


  }

`;