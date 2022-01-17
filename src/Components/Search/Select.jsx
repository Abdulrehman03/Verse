import * as React from "react";
import { makeStyles, createStyles, useTheme } from "@mui/styles";
import AsyncSelect from "react-select/async";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() =>
  createStyles({
    redText: {
      color: "red",
      marginTop: "5px",
    },
  })
);

const Select = (props) => {
  const defaultTheme = useTheme();
  const classes = useStyles();

  // commented for future use
  // eslint-disable-next-line no-unused-vars
  const handleChange = (newValue, actionMeta) => {
    props.setValue(newValue);
  };
  // // commented for future use
  // const handleInputChange = (newValue: any, actionMeta: any) => {

  // };
  const filterArr = (inputValue) => {
    return props.options.filter((i) =>
      i.label.toString().toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterArr(inputValue));
    }, 1000);
  };

  return (
    <div>
      <AsyncSelect
        defaultOptions={props.options}
        id={props.id}
        value={props.value}
        isMulti={props.multiple}
        isLoading={props.loading}
        loadOptions={promiseOptions}
        placeholder={props.placeholder}
        name={props.name}
        isDisabled={props.disabled}
        onChange={handleChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: defaultTheme.palette.gray[100],
            primary: defaultTheme.palette.gray[600],
          },
        })}
      />
      {props.error ? (
        <Typography variant="body2" className={classes.redText}>
          &nbsp;&nbsp;{props.helperText}
        </Typography>
      ) : null}
    </div>
  );
};

export default Select;
