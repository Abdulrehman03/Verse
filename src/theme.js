import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16325c",
      heading: "#fff9f9",
      subHeading: "#706e6b",
      lightGray: "#bbbbbb",
      lightGray2: "#dddbda",
      blue: "#0070d2",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
