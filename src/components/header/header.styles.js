import styled from 'styled-components';


export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(61,66,80,.18);
  border-bottom: 1px solid grey;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionContainerLink = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;