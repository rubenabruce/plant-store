import styled from 'styled-components';
import { Link } from 'react-router-dom';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';


export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  background-color: #fefefe;
  border-bottom: 1px solid grey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1700px;
  margin: auto;
  z-index:20;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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