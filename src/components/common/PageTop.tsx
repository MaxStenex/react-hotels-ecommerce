import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      color: "#fff",
      padding: "160px 0px 200px 0px",
      position: "relative",
      textAlign: "center",
      textShadow: "2px 2px black",
      height: 550,
      [theme.breakpoints.down("xs")]: {
        padding: "50px 0px 75px 0px",
        height: "auto",
      },
    },
    shadow: {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.45)",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
    title: {
      fontWeight: "700 !important" as any,
      marginBottom: "15px !important",
    },
    container: {
      position: "relative",
      zIndex: 15,
    },
    subtitle: {
      fontSize: "16px",
    },
  })
);

type PageTopProps = {
  title: string;
  subtitle: string;
  background: string;
  children?: React.ReactNode;
};

const PageTop: React.FC<PageTopProps> = ({ title, subtitle, children, background }) => {
  const classes = useStyles();

  return (
    <section
      className={classes.section}
      style={{ background: `url(${background}) no-repeat center center/cover` }}
    >
      <Grid className={classes.shadow}></Grid>
      <Container className={classes.container} maxWidth="md">
        <Typography variant="h3" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {subtitle}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

export default PageTop;
