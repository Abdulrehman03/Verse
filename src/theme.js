import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16325c",
      heading: "#fff9f9",
      lightGray: "#bbbbbb",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
