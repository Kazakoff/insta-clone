import styled from "@emotion/styled";
import { css } from "emotion";

export const Post = css`
   {
    display: flex;
    flex-direction: row;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    margin-bottom: 60px;
    margin-left: 20%;
    margin-right: 20%;
  }
`;

export const PostUser = css`
   {
    display: flex;
    padding: 16px;
    align-items: center;
  }
`;
export const PostImage = styled.img`
  width: 500%;
  height: 500%;
`;
export const PostImageWraper = css`
   {
    display: flex;
    align-content: center;
    width: 50%;
  }
`;
export const PostCaption = css`
   {
    padding: 16px 16px;
  }
`;
