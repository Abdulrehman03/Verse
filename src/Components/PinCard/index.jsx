import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import pinImage from "../../Assets/pin.png";
import { Typography, Grid } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    analyticsWrapperTop: {
      maxHeight: "650px",
      overflowY: "auto",
      background: theme.palette.primary.lightGray2,
      borderRadius: "10px",
      border: "1px solid #797979",
      padding: theme.spacing(2),
    },
    analyticsWrapperCenter: {
      background: theme.palette.primary.lightGray2,
      borderRadius: "10px",
      border: "1px solid #797979",
      padding: theme.spacing(2),
    },
    cardTitleWrapper: {
      display: "flex",
    },
    cardHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
    },
    cardSubHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "14px !important",
    },
  })
);

const PinCard = ({
  heading,
  subHeading,
  heading2,
  subHeading2,
  children,
  totalHeading,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.analyticsWrapperTop}>
      <div className={classes.cardTitleWrapper}>
        <span>
          <img src={pinImage} height="30px" alt="pin" />
        </span>
        <Grid container justifyContent="space-between" spacing={1}>
          <Grid item xs={totalHeading === 2 ? 6 : 12}>
            <Typography className={classes.cardHeading}>{heading}</Typography>
            <Typography className={classes.cardSubHeading}>
              {subHeading}
            </Typography>
          </Grid>
          {totalHeading === 2 ? (
            <Grid item xs={6}>
              <Typography className={classes.cardHeading}>
                {heading2}
              </Typography>
              <Typography className={classes.cardSubHeading}>
                {subHeading2}
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PinCard;
