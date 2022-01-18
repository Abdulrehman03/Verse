import * as React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../Assets/logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { paddingTop: "30px", height: "100%", width: "100%" },
    logo: {
      height: "64px",
      [theme.breakpoints.down("md")]: {
        height: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "30px",
      },
    },
    header: {
      position: "fixed",
      top: 0,
      display: "flex",
      minWidth: "100%",
      padding: theme.spacing(2),
      margin: "auto",
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        minWidth: "95%",
      },
    },
    linksDiv: {
      paddingLeft: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
    },
    NavLink: {
      textDecoration: "none",
      fontFamily: '"Roboto", sans-serif',
      color: theme.palette.primary.heading,
      lineHeight: "normal",
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      margin: theme.spacing(0, 0, 0, 3),
    },
    SocilaLink: {
      backgroundColor: theme.palette.primary.lightGray,
      textDecoration: "none",
      fontFamily: '"Roboto", sans-serif',
      padding: theme.spacing(1),
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      margin: theme.spacing(0, 1),
    },
    wrapper: {
      maxWidth: "1280px",
      padding: theme.spacing(0, 3),
      margin: "auto",
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

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={7} sm={8} md={9}>
              <div>
                <img className={classes.logo} src={Logo} alt="logo" />
              </div>
            </Grid>
            <Grid item xs={5} sm={4} md={3}>
              <div className={classes.linksDiv}>
                <Link to="/">
                  <div className={classes.SocilaLink}>
                    <TelegramIcon sx={{ color: "#fff" }} />
                  </div>
                </Link>
                <Link to="/">
                  <div className={classes.SocilaLink}>
                    <TwitterIcon sx={{ color: "#fff" }} />
                  </div>
                </Link>
                <Link className={classes.NavLink} to="/">
                  Home
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.wrapper}>{children}</div>
      <div className={classes.footer}>
        <div>
          <p className={classes.footerContent}>© copyright V3RSE 2022</p>
          <p className={classes.footerContent}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
