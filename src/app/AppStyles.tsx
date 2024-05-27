import { Global, css } from "@emotion/react";

const Styles = css`
  body {
    overflow-x: hidden;
  }
`;

const AppStyles = () => <Global styles={Styles}></Global>;

export default AppStyles;
