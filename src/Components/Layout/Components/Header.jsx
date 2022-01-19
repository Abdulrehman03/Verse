import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";
import { ShowDetailContext } from "../../../Context/ShowDetail";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../../Assets/logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
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
      zIndex: 1,
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
  })
);

const Header = () => {
  const classes = useStyles();
  const { setShowDetails } = React.useContext(ShowDetailContext);

  return (
    <div className={classes.header}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={4} sm={8} md={9}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowDetails(false)}
            >
              <img className={classes.logo} src={Logo} alt="logo" />
            </div>
          </Grid>
          <Grid item xs={7} sm={4} md={3}>
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
              <Link
                className={classes.NavLink}
                to="/"
                onClick={() => setShowDetails(false)}
              >
                Home
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
