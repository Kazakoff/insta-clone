import styled from "@emotion/styled";
import { css } from "emotion";

const basicStyle2 = css`
  display: flex;
  border-color: rgb(0, 60, 53);
  background-color: white !important;
`;

const basicStyle = css`
  display: flex;
  border-color: rgb(0, 60, 53);
  background-color: white !important;
`;

export const BigButton = styled.button`
   {
    background-color: white !important;
    border-color: rgb(82, 60, 53);
    font-weight: 700;
    text-decoration: none;
    user-select: none;
    padding: 2em 2em;
    margin: 2em;
    outline: none;
    border: 2px solid;
    border-radius: 2px;
    transition: 0.2s;
  }
`;
export const CenteredButtonToolbar = styled.div`
   {
    display: flex;
    border-color: rgb(82, 60, 53);
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
//composes: ${basicStyle};
export const logo = css`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
