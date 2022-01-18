import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Layout from "../Components/Layout/Layout";
import MainPage from "../Components/Landing";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      height: "75vh",
      width: "100%",
    },
  })
);

const Landing = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <MainPage />
      </div>
    </Layout>
  );
};

export default Landing;
