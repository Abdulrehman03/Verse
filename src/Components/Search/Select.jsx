import * as React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import Select, { components } from "react-select";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const useStyles = makeStyles((theme) =>
  createStyles({
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

const Search = (props) => {
  const classes = useStyles();
  const { data, onClick } = props;

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

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <SearchIcon fontSize="large" />
      </components.DropdownIndicator>
    );
  };

  //You can customize this part as design
  const Option = (props) => {
    const { label, value } = props;
    console.log(props);
    return (
      <div className={classes.optionWrapper} onClick={onClick}>
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

  return (
    <div className={classes.searchContainer}>
      <Select
        {...props}
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
  );
};

export default Search;
