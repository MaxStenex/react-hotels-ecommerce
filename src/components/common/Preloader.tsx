import React from "react";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PreloaderAnimation from "../../assets/preloader.gif";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    preloader: {
      display: "flex",
      width: "250px",
      height: "250px",
      margin: "15px auto",
    },
  })
);

const Preloader = () => {
  const classes = useStyles();

  return <img src={PreloaderAnimation} alt="Loading..." className={classes.preloader} />;
};

export default Preloader;
