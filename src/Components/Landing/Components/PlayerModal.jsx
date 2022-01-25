import * as React from "react";
import { createStyles, makeStyles, styled, useTheme } from "@mui/styles";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import personImage from "../../../Assets/person.png";
import coins from "../../../Assets/coins.png";
import PinCard from "../../PinCard";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ShowDetailContext } from "../../../Context/ShowDetail";
import { visitors } from "../../../Data/MOCK_DATA";

const useStyles = makeStyles((theme) =>
  createStyles({
    subHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "14px !important",
      marginTop: "16px !important",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
    visitorHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "16px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    playerHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "16px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    playerPriceHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "16px !important",
      textAlign: "center !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    visitorDialogHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "40px !important",
      marginLeft: "15px !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px !important",
      },
    },
    chartDetail: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "14px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    refreshButtonWrapper: {
      display: "flex",
      alignItems: "center",
      float: "right",
      cursor: "pointer",
    },
    refreshIcon: {
      color: theme.palette.primary.heading,
      padding: "16px 0 0 5px",
    },
    analyticsWrapperTop: {
      background: theme.palette.primary.lightGray2,
      borderRadius: "10px",
      border: "1px solid #797979",
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    analyticsWrapperCenter: {
      background: theme.palette.primary.lightGray2,
      borderRadius: "10px",
      border: "1px solid #797979",
      padding: theme.spacing(2),
      margin: theme.spacing(2, 0),
    },
    cardCount: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.blue,
      fontSize: "60px !important",
      textAlign: "center",
    },
    cardArrow: {
      color: "#165828",
      fontSize: "70px !important",
    },
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    flexStart: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
    },
    visitors: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(0, 5, 0, 0),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0.5, 0),
        textAlign: "center",
      },
    },
    players: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(0),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0.5, 0),
        textAlign: "center",
      },
    },
    personList: {
      display: "flex",
      margin: "15px 0",
      cursor: "pointer",
    },
    closeButtonDiv: {
      position: "absolute",
      cursor: "pointer",
      top: "60px",
      right: "50px",
      [theme.breakpoints.down("sm")]: {
        top: "10px",
        right: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        top: "10px",
        right: "15px",
      },
    },
    modalContent: {
      maxHeight: "500px",
      overflowY: "auto",
    },
    backdrop: {
      backgroundColor: "transparent !important",
    },
    paper: {
      width: "60% !important",
      maxHeight: "85vh !important",
      backgroundColor: "#797979 !important",
      borderRadius: "20px !important",
      border: "3px solid #dddbda",
      padding: theme.spacing(5, 3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0),
        width: "100% !important",
      },
    },
    closeIcon: {
      color: theme.palette.primary.lightGray2,
    },
    backIcon: {
      margin: "12px 10px 0 0",
      color: theme.palette.primary.lightGray2,
      backgroundColor: "#0dc2d9",
      borderRadius: "25px",
      cursor: "pointer",
    },
    visitorDialogProgress: {
      marginLeft: "15px !important",
    },
    manaSection: {
      padding: theme.spacing(2),
    },
    manaTransactions: {
      marginTop: "0px",
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "20px !important",
      textAlign: "center !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    button: {
      background: "#1e98d7 !important",
      padding: "10px 3rem !important",
      fontSize: "14px !important",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        padding: "10px !important",
        fontSize: "10px !important",
      },
    },
    actionButton: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "14px !important",
      marginTop: "4px !important",
      textTransform: "capitalize",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
    padding: {
      padding: theme.spacing(2.5, 0),
    },
  })
);

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: "#0070d2",
  },
}));

const BorderLinearProgressBorder = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "transparent",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    border: "1px solid #b4b4b4",
    backgroundColor: "#0070d2",
  },
}));

const PlayerModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { visitorData, setVisitorData } = React.useContext(ShowDetailContext);

  const handleNext = () => {
    const index = visitors.findIndex((elem) => elem.id === visitorData?.id);
    const nextData = visitors[index + 1];
    if (nextData) setVisitorData(nextData);
  };
  const handlePrev = () => {
    const index = visitors.findIndex((elem) => elem.id === visitorData?.id);
    const prevData = visitors[index - 1];
    if (prevData) setVisitorData(prevData);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={"md"}
        open={open}
        keepMounted
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          className: classes.paper,
        }}
        BackdropProps={{
          className: classes.backdrop,
        }}
      >
        <Container>
          <div className={classes.closeButtonDiv}>
            <CloseIcon
              onClick={handleClose}
              className={classes.closeIcon}
              fontSize="large"
            />
          </div>
          <Grid container alignItems={"center"}>
            <Grid item xs={2} sm={2} md={2} lg={1}>
              <img src={personImage} alt="person" height="60px" />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={9}>
              <Typography
                noWrap={true}
                className={classes.visitorDialogHeading}
              >
                {visitorData?.name}
              </Typography>
              <div className={classes.visitorDialogProgress}>
                <BorderLinearProgressBorder
                  variant="determinate"
                  value={visitorData?.progress}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography className={classes.subHeading}>
                These are the analytics of an individual player.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            style={{ marginBottom: "30px" }}
            container
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <div className={classes.flexStart}>
                <ArrowBackSharpIcon
                  onClick={handleClose}
                  className={classes.backIcon}
                  fontSize="medium"
                />
                <Typography className={classes.subHeading}>
                  Back to land home.
                </Typography>
              </div>
            </Grid>
          </Grid>

          <div className={classes.modalContent}>
            <Grid container justifyContent={"space-between"} spacing={1}>
              <Grid item xs={12} sm={12} md={7}>
                <PinCard
                  heading="Wearables"
                  subHeading="Wearables used by the players"
                  maxHeight={"370px"}
                >
                  <div style={{ margin: "20px 0" }}>
                    {visitorData?.players?.map((person, i) => {
                      return (
                        <Grid className={classes.personList} key={i} container>
                          <Grid style={{ marginRight: "10px" }} item xs={1}>
                            <img src={coins} alt="person" height="30px" />
                          </Grid>
                          <Grid item xs={10}>
                            <Grid
                              container
                              justifyContent="space-between"
                              className={classes.visitors}
                            >
                              <Grid item xs={4}>
                                <Typography
                                  noWrap={true}
                                  className={classes.visitorHeading}
                                >
                                  {person.name}
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography
                                  noWrap={true}
                                  className={classes.visitorHeading}
                                >
                                  USD {person.price}
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography
                                  noWrap={true}
                                  className={classes.visitorHeading}
                                >
                                  {person.art}
                                </Typography>
                              </Grid>
                            </Grid>
                            <div>
                              <BorderLinearProgress
                                variant="determinate"
                                value={person.progress}
                              />
                            </div>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </div>
                </PinCard>
                <br />
                <PinCard
                  heading="Name"
                  subHeading="ENS Domains Purshased by thhis player"
                >
                  <div className={classes.padding}>
                    <Grid
                      style={{ marginTop: "5px" }}
                      className={classes.personList}
                      container
                    >
                      <Grid style={{ marginRight: "10px" }} item xs={1}>
                        <img src={coins} alt="person" height="30px" />
                      </Grid>
                      <Grid item xs={10}>
                        <Grid
                          container
                          justifyContent="space-between"
                          className={classes.player}
                        >
                          <Grid item xs={4}>
                            <Typography
                              noWrap={true}
                              className={classes.playerHeading}
                            >
                              Gold Drip Chain chain
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography
                              noWrap={true}
                              className={classes.playerPriceHeading}
                            >
                              USD 23
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography
                              noWrap={true}
                              className={classes.playerHeading}
                            >
                              5 Paid Wearables
                            </Typography>
                          </Grid>
                        </Grid>
                        <div>
                          <BorderLinearProgress
                            variant="determinate"
                            value={10}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </PinCard>
              </Grid>
              <Grid item xs={12} sm={12} md={5}>
                <PinCard
                  heading="Visitor Wallet Value"
                  subHeading="Current Wallet Value in USD"
                  minHeight={"200px"}
                >
                  <div className={classes.padding}>
                    <Typography className={classes.cardCount}>
                      {visitorData?.price}
                    </Typography>
                  </div>
                </PinCard>
                <br />
                <PinCard
                  heading="Mana Transactions"
                  subHeading="Recent Transactions Value in USD"
                  minHeight={"200px"}
                >
                  <div className={classes.manaSection}>
                    <div>
                      <Typography
                        align="left"
                        className={classes.playerHeading}
                      >
                        Last 30 Days
                      </Typography>
                      <br />
                      <div>
                        <Typography
                          style={{ lineHeight: 1 }}
                          className={classes.cardCount}
                        >
                          {visitorData?.manaTransaction30Days}
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.manaTransactions}
                        >
                          4 Transactions
                        </Typography>
                      </div>
                    </div>
                    <br />
                    <div>
                      <Typography
                        align="left"
                        className={classes.playerHeading}
                      >
                        Last 90 Days
                      </Typography>
                      <br />
                      <div>
                        <Typography
                          style={{ lineHeight: 1 }}
                          className={classes.cardCount}
                        >
                          {visitorData?.manaTransaction90Days}
                        </Typography>
                        <Typography
                          align="center"
                          className={classes.manaTransactions}
                        >
                          6 Transactions
                        </Typography>
                      </div>
                    </div>
                  </div>
                </PinCard>
              </Grid>
            </Grid>
          </div>
        </Container>
        <br />
        <DialogActions>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <Button onClick={handlePrev}>
                <KeyboardArrowLeftIcon
                  className={classes.closeIcon}
                  fontSize="small"
                />
                <Typography className={classes.actionButton}>
                  Previous Player
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button className={classes.button} variant="contained">
                Go to Player Location
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button style={{ float: "right" }} onClick={handleNext}>
                <Typography className={classes.actionButton}>
                  Next Player
                </Typography>
                <KeyboardArrowRightIcon
                  className={classes.closeIcon}
                  fontSize="small"
                />
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PlayerModal;
