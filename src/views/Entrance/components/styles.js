/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css } from 'emotion';

// border-color: rgb(23, 60, 53);

export const basicStyle = css`
  border-color: red;
  background-color: red;
`;

export const BigButton = styled.button`
  ${basicStyle};
  background-color: red;
  font-weight: 700;
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

export const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
