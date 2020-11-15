import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      textAlign: "center",
      backgroundColor: "#093D77",
      fontSize: 16,
      padding: "15px 0px",
      color: "#fff",
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();
  return <footer className={classes.footer}>Copyright 2020</footer>;
};

export default Footer;
