import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    main: "#20b2e3",
  },
  fontSize: {
    small: "12px",
    normal: "16x",
    big: "20px",
    large: "24px",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
