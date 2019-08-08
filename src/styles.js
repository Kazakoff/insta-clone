/** @jsx jsx */
import styled from '@emotion/styled';
import { css } from 'emotion';

export const theme = {
  colors: {
    mainColor: 'rgb(0, 60, 53)',
    mainBackground: 'white'
  }
};
/*
  @font-face {
    font-family: 'Exo 2', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Exo+2&display=swap');
  }
*/

export const basicStyle = css`
  border-color: rgb(0, 60, 53);
  background-color: red;
`;
/*
    border-color: ${props => props.theme.colors.mainColor};
  background-color: ${props => props.theme.colors.mainBackground};
*/

export const BigButton = styled.div`
  ${basicStyle};
  font-weight: 900;
  text-decoration: none;
  user-select: none;
  padding: 2em 2em;
  margin: 2em;
  outline: none;
  border: 2px solid;
  border-radius: 2px;
  transition: 0.2s;
`;
export const CenteredButtonToolbar = styled.div`
  display: flex;
  border-color: rgb(82, 60, 53);
  align-items: center;
  justify-content: center;
  height: 100%;
`;
// composes: ${basicStyle};
export const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
