import * as React from "react";
import { createStyles, makeStyles, styled } from "@mui/styles";
import {
  Grid,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Search from "../Search/Select";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import RealTime from "./Components/RealTime";
import History from "./Components/History";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    title: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "50px !important",
      lineHeight: "60px !important",
      margin: `${theme.spacing(4, 0, 2, 0)} !important`,
    },
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
    chartDetail: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.subHeading,
      fontSize: "14px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px !important",
      },
    },
    tabContainer: {
      "& .MuiToggleButton-root": {
        background: theme.palette.primary.main,
        color: "#dddbda",
        border: "none !important",
        minWidth: "160px",
        borderRadius: "0px",
        textTransform: "capitalize",
        fontFamily:
          "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
        padding: `${theme.spacing(0.75, 3)} !important`,
        "&:hover": {
          color: "#dddbda !important",
        },
      },
      "& .MuiToggleButton-root.Mui-selected": {
        color: " #333333 !important",
        background: "#dddbda !important",
        border: "1px solid #797979",
        "&:hover": {
          color: "#333333 !important",
        },
      },
    },
    searchContainer: {
      margin: `${theme.spacing(3, 0)} !important`,
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
    visitors: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(0, 5, 0, 0),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5, 0),
        textAlign: "center",
      },
    },
  })
);

const data = [
  { label: "Snoop Dogg's Crib", value: "01-131" },
  { label: "Samsung Center", value: "02-231" },
  { label: "Jenifer Crib", value: "01-131" },
  { label: "Oppo Center", value: "02-231" },
  { label: "Alba Flores Crib", value: "01-131" },
  { label: "Ahmad Center", value: "02-231" },
  { label: "John Doe", value: "01-131" },
  { label: "Apple Center", value: "02-231" },
];

const MainPage = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState("realtime");

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

  const handleChange = (event, newTab) => {
    setTabValue(newTab);
  };

  return (
    <div>
      <Container>
        {/* ============================================================================================== */}
        {/* ========================Tabs Container For Analytics Changing================================= */}
        {/* ============================================================================================== */}

        <Grid
          container
          justifyContent={"flex-start"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid className={classes.tabContainer} item xs={12} sm={12} md={6}>
            <ToggleButtonGroup
              color="primary"
              value={tabValue}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="realtime">Realtime Analytics</ToggleButton>
              <ToggleButton value="history">Historical Data</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        {/* ============================================================================================== */}
        {/* ======================= Container For User Nanme & Search Bar ================================ */}
        {/* ============================================================================================== */}
        <Grid
          container
          justifyContent={"flex-start"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid className={classes.tabContainer} item xs={12} sm={12} md={6}>
            <Typography className={classes.title}>Snoop Dogg Crib</Typography>
            <div>
              <BorderLinearProgress variant="determinate" value={40} />
            </div>
          </Grid>
          <Grid className={classes.searchContainer} item xs={12} sm={12} md={6}>
            <Search data={data} />
          </Grid>
        </Grid>
        {/* ============================================================================================== */}
        {/* ======================= Container For Data And Charts         ================================ */}
        {/* ============================================================================================== */}
        {tabValue === "realtime" ? <RealTime /> : null}
        {tabValue === "history" ? <History /> : null}
      </Container>
    </div>
  );
};

export default MainPage;
