import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapperFooter: {
      [theme.breakpoints.down("md")]: {
        marginTop: "10% !important",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(5),
      },
    },
    footer: {
      marginTop: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
    },
    footerContent: {
      color: theme.palette.primary.heading,
      textAlign: "center",
      lineHeight: "18px",
      margin: 0,
      paddingBottom: "5px",
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.wrapperFooter}>
      <div className={classes.footer}>
        <p className={classes.footerContent}>© copyright V3RSE 2022</p>
        <p className={classes.footerContent}>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
