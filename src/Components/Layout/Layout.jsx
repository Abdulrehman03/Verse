import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { paddingTop: "30px", height: "100%", width: "100%" },
    wrapper: {
      zIndex: 0,
      maxWidth: "1280px",
      padding: theme.spacing(0, 3),
      marginTop: "100px",
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        height: "100% !important",
        margin: "auto auto 5% auto",
        padding: theme.spacing(0, 3, 5, 3),
      },
      [theme.breakpoints.down("sm")]: {
        margin: "10% auto auto auto",
        padding: theme.spacing(0, 3, 5, 3),
      },
    },
  })
);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid className={classes.wrapper}>{children}</Grid>
      <Footer />
    </div>
  );
};

export default Layout;
