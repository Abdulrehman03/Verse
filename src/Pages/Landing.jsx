import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Grid, Typography, Container } from "@mui/material";
import Layout from "../Components/Layout/Layout";
import Image from "../Assets/landingPage.png";
import Select, { components } from "react-select";
// import { Data } from "../Data/Index";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      height: "75vh",
      width: "100%",
    },
    logoDiv: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      },
    },
    logo: {
      height: "450px",
      [theme.breakpoints.down("sm")]: {
        height: "250px",
      },
      [theme.breakpoints.down("md")]: {
        height: "350px",
      },
    },
    mainHeading: {
      width: "300px",
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "50px !important",
      lineHeight: "60px !important",
      [theme.breakpoints.down("md")]: {
        margin: "auto !important",
        textAlign: "center",
      },
    },
    subHeading: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      color: theme.palette.primary.heading,
      fontSize: "30px !important",
      marginTop: "16px !important",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
    searchContainer: {
      "& #react-select-3-placeholder": {
        fontFamily:
          "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
        fontSize: "14px !important",
        color: theme.palette.primary.heading,
      },
      "& #react-select-3-input": {
        fontFamily:
          "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
        fontSize: "14px !important",
        color: "#fff9f9 !important",
      },
      "& .css-1ko62if-control": {
        backgroundColor: "transparent !important",
        border: `1px solid ${theme.palette.primary.heading}`,
        color: theme.palette.primary.heading,
      },
      "& .css-1w77nty-control": {
        color: theme.palette.primary.heading,
        backgroundColor: "transparent !important",
        border: `1px solid ${theme.palette.primary.heading}`,
      },
    },
    homeIcon: {
      color: "white",
      backgroundColor: "#ff6018",
      borderRadius: "5px",
      fontSize: "30px !important",
      margin: theme.spacing(0.5),
    },
    optionWrapper: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: theme.spacing(1),
      cursor: "pointer",
    },
    nameWrapper: {
      marginLeft: theme.spacing(1),
    },
    name: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      fontSize: "14px",
      fontWeight: "bolder",
    },
    position: {
      fontFamily:
        "AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important",
      fontSize: "14px",
      color: theme.palette.primary.subHeading,
      fontWeight: "bold",
    },
  })
);

const Landing = () => {
  const classes = useStyles();

  const indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: "transparent",
    marginBottom: 8,
    marginTop: 8,
    width: 1,
  };

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  //You can customize this part as design
  const Option = (props) => {
    const { label, value } = props;
    console.log(props);
    return (
      <div className={classes.optionWrapper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "centers",
          }}
        >
          <HomeIcon className={classes.homeIcon} />
        </div>
        <div className={classes.nameWrapper}>
          <div className={classes.name}>{label}</div>
          <div>
            <span className={classes.position}>Position</span>{" "}
            <span className={classes.position}>&bull;</span> &nbsp;
            <span className={classes.position}>{value}</span>
          </div>
        </div>
      </div>
    );
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon fontSize="large" />
      </components.DropdownIndicator>
    );
  };

  const data = [
    { label: "Snoop Dogg's Crib", value: "01-131" },
    { label: "Samsung Center", value: "02-231" },
  ];

  return (
    <Layout>
      <div className={classes.root}>
        <Container>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.logoDiv}>
                <img className={classes.logo} src={Image} alt="landing Page" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.headingContainer}>
                <Typography className={classes.mainHeading}>
                  Metaverse Intelligence in Realtime.
                </Typography>
                <Typography className={classes.subHeading}>
                  Search for a Decentraland location
                </Typography>
                <div className={classes.searchContainer}>
                  <Select
                    closeMenuOnSelect={false}
                    components={{
                      Option,
                      DropdownIndicator,
                      IndicatorSeparator,
                    }}
                    styles={{
                      option: (base) => ({
                        ...base,
                        border: `1px dotted red`,
                        height: "100%",
                      }),
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 5,
                      colors: {
                        ...theme.colors,
                        primary25: "white",
                        primary: "white",
                      },
                    })}
                    placeholder="Search an estate or parcel"
                    // defaultValue={data[0]}
                    options={data}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Landing;
