import React from "react";
import { createStyles, makeStyles, styled } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Arrow from "../../../Assets/arrow.png";
import personImage from "../../../Assets/person.png";
import PinCard from "../../PinCard";
import { visitors } from "../../../Data/MOCK_DATA";
import { Tooltip, BarChart, XAxis, Bar, LabelList } from "recharts";
import { VictoryPie } from "victory";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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

const RealTime = () => {
  const classes = useStyles();

  const dataR = [
    { name: "$0", value: 100 },
    { name: "$1-100", value: 500 },
    { name: "$100-500", value: 200 },
    { name: "$500+", value: 100 },
  ];

  const dataR1 = [
    { name: "Cat", value: 2 },
    { name: "Cat2", value: 5 },
    { name: "Cat3", value: 4 },
    { name: "Cat4", value: 1 },
  ];

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

  return (
    <div>
      {/* ============================================================================================== */}
      {/* ======================= Container For Some Info & Refresh Button ============================= */}
      {/* ============================================================================================== */}
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
        style={{ marginBottom: "30px" }}
      >
        <Grid item xs={7} md={10}>
          <Typography className={classes.subHeading}>
            These are the live analytics from the estate selected. This data
            auto refreshes every 60 seconds.
          </Typography>
        </Grid>
        <Grid item xs={5} md={2}>
          <div className={classes.refreshButtonWrapper}>
            <Typography className={classes.subHeading}>Refresh Data</Typography>
            <div>
              <CachedIcon className={classes.refreshIcon} fontSize="medium" />
            </div>
          </div>
        </Grid>
      </Grid>
      {/* ============================================================================================== */}
      {/* =========================== Container For Graph & Analytics ================================== */}
      {/* ============================================================================================== */}
      <Grid container justifyContent={"space-between"} spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
          {/* ====>  Grid 1 ---- Card 1 <====*/}
          <Grid item xs={12} sm={6} md={12}>
            <PinCard
              heading="Live Visitor"
              subHeading=" Visitors currently on this plot"
            >
              <Typography className={classes.cardCount}>139</Typography>
            </PinCard>
          </Grid>
          <br />
          {/* Grid 1 ---- Card 2 */}
          <Grid item xs={12} sm={6} md={12}>
            <PinCard
              heading="Live Visitor Wallet Value"
              subHeading="Total wallet value of all users"
            >
              <Typography className={classes.cardCount}>$29,300</Typography>
            </PinCard>
          </Grid>

          <br />
          {/* Grid 1 ---- Card 3 */}
          <Grid item xs={12} sm={6} md={12}>
            <PinCard
              totalHeading={2}
              heading="Videos Playin"
              subHeading="Realtime"
              heading2="Live Emotes"
              subHeading2="Realtime"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}
              >
                <div className={classes.flex}>
                  <img src={Arrow} alt="arrow" />
                  <Typography className={classes.cardCount}>11</Typography>
                </div>
                <div className={classes.flex}>
                  <img src={Arrow} alt="arrow" />
                  <Typography className={classes.cardCount}>26</Typography>
                </div>
              </div>
            </PinCard>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <PinCard
            heading="Visitor"
            subHeading="All visitors, their wallet values and wearables."
          >
            {visitors.map((person, i) => {
              return (
                <Grid
                  key={i}
                  container
                  style={{ display: "flex", margin: "15px 0" }}
                >
                  <Grid item xs={1}>
                    <img src={personImage} alt="person" height="30px" />
                  </Grid>
                  <Grid item xs={11}>
                    <Grid
                      container
                      justifyContent="space-between"
                      className={classes.visitors}
                    >
                      <Grid item xs={4}>
                        <Typography className={classes.visitorHeading}>
                          {person.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.visitorHeading}>
                          USD {person.price}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.visitorHeading}>
                          {person.wearables} Paid Wearables
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
          </PinCard>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Grid item xs={12} sm={6} md={12}>
            <PinCard
              heading="Visitor Wallet Values (USD)"
              subHeading="Breakdown of visitors wallet values"
            >
              <BarChart width={250} height={100} data={dataR} barSize={30}>
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 5, right: 5 }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#ff6018"
                  background={{ fill: "transparent" }}
                />
              </BarChart>
            </PinCard>
          </Grid>

          <br />
          <Grid item xs={12} sm={6} md={12}>
            <PinCard
              heading="Visitor Wearable Categories"
              subHeading="Breakdown of wearables by value"
            >
              <BarChart width={250} height={100} data={dataR1} barSize={30}>
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#ff6018"
                  background={{ fill: "transparent" }}
                >
                  <LabelList dataKey="value" position="top" />
                </Bar>
              </BarChart>
            </PinCard>
          </Grid>
          <br />
          <Grid item xs={12} sm={6} md={12}>
            <PinCard heading="Visitor Demographics" subHeading="Gender">
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item xs={5}>
                  <Typography className={classes.chartDetail}>
                    62% Male
                  </Typography>
                  <Typography className={classes.chartDetail}>
                    38% Female
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <div style={{ width: "150px" }}>
                    <VictoryPie
                      colorScale={["#a8cde8", "#edb7c2"]}
                      innerRadius={({ datum }) => (datum.y = 80)}
                      labels={[]}
                      data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                      ]}
                    />
                  </div>
                </Grid>
              </Grid>
            </PinCard>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RealTime;