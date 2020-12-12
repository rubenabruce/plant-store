import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/search.svg'; 

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

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

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  margin-left: 100px;

  a {
  font-size: 20px;
  position: relative;

  text-decoration: none;

   &:before,
    &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0; right: 0;
        height: 1.5px;
        background-color: grey;
    }
    &:before {
        opacity: 0;
        transform: translateY(-${distance});
        transition: transform 0s ${easeOutBack}, opacity 0s;
    }
    &:after {
        opacity: 0;
        transform: translateY(${distance}/2);
        transition: transform ${duration} ${easeOutBack}, opacity ${duration};
    }
    &:hover,
    &:focus {
        &:before,
        &:after {
            opacity: 1;
            transform: translateY(0);
        }
        &:before {
            transition: transform ${duration} ${easeOutBack}, opacity ${duration};
        }
        &:after {
            transition: transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration};
        }
    }
}
`;

export const OptionContainerLink = styled(Link)`
  margin: 10px 15px;
  cursor: pointer;
`;

export const OptionContainerSignOut = styled.div`
  margin: 10px 15px;
  cursor: pointer;
  font-size: 20px;
    position: relative;
    -webkit-text-decoration: none;
    text-decoration: none;
`;

export const IconsContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    /* width: 8%; */
    align-items: center;
`

const SearchBoxOut = css`
    border: none;
    height: 100%;
    padding: 5px;
    display: inline;
    opacity: 1;
    width: 170px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.320, 1.275);
    
    input{
        opacity: 0;
        transition: all 1s cubic-bezier(0.175, 0.885, 0.320, 1.275);
        width: 0px;
        font-family: 'Montserrat';

        :focus {
            ${SearchBoxOut}            
        }
    }

    &:hover {        
        border: 1px solid black;
        border-radius: 4px;


        & input {
            ${SearchBoxOut}            
        }

        & .searchIcon {
            background-color: white;
            filter: invert(1);
        }
    }

`;

export const SearchIconCont = styled(SearchIcon)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.320, 1.275);
`;