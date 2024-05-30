import { Global, css } from "@emotion/react";

const Styles = css`
  body {
    overflow-x: hidden;
    font-family: "Spoqa Han Sans Neo", "sans-seri";
  }
`;

const AppStyles = () => <Global styles={Styles}></Global>;

export default AppStyles;
