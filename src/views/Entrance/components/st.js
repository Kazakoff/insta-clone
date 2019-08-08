/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css } from 'emotion';

// это не работает при импорте из внешнего js???
const dynamicStyle = css`
  color: red;
`;
const Container = styled.div`
  ${dynamicStyle};
`;
export default Container;
