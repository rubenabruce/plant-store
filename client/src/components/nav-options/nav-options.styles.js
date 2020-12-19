import styled from 'styled-components';
import { Link } from 'react-router-dom';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  margin-left: 100px;

  @media screen and (max-width: 800px) {
    width: 80%;
    align-items: flex-start;
    margin: auto;
    flex-direction: column;
    position: relative;
  }


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