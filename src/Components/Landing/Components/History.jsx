import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) =>
  createStyles({
    historyDiv: {
      background: "#313234",
      minHeight: "500px",
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    mainText: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "50px !important",
      margin: "16px !important",
      textAlign: "center",
    },
    messageText: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "14px !important",
      margin: "8px !important",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
    inputField: {
      height: "50px",
      borderRadius: "4px",
      background: "transparent",
      border: "1px solid #dddbda",
      boxShadow: "none",
      fontSize: "medium",
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: "100%",
      color: theme.palette.primary.heading,
      "&:focus": {
        outline: "none",
      },
    },
    button: {
      background: "#1e98d7 !important",
      padding: "10px 3rem !important",
      fontSize: "14px",
    },
  })
);

const History = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.historyDiv}>
        <div>
          <Typography className={classes.mainText}>Coming Soon!</Typography>
          <Typography className={classes.messageText}>
            <span className={classes.SocilaLink}>
              <EmailIcon sx={{ color: "#fff" }} />
            </span>
            Leave your email here and be the first to hear about it.
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            maxWidth: "320px",
          }}
        >
          <input
            id="email"
            className={classes.inputField}
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <Button className={classes.button} variant="contained">
            Submit
          </Button>
        </div>
        <Typography className={classes.messageText}>
          Follow our social networks:
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="#">
            <span className={classes.SocilaLink}>
              <TelegramIcon sx={{ color: "#fff" }} />
            </span>
          </Link>
          <Link to="#">
            <span className={classes.SocilaLink}>
              <TwitterIcon sx={{ color: "#fff" }} />
            </span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default History;
