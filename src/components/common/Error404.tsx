import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import ErrorImage from "../../assets/404.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorImage: {
      margin: "0 auto",
      display: "flex",
      width: "40%",
      height: "auto",
      minWidth: 250,
    },
  })
);

const Error404 = () => {
  const classes = useStyles();

  return <img className={classes.errorImage} src={ErrorImage} alt="Nothing found 404" />;
};

export default Error404;
