import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: "#093D77",
      fontSize: 18,
      padding: "15px 0px",
      color: "#fff",
    },
    title: {
      display: "inline",
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="center">
          <Typography className={classes.title} variant="h6">
            My github:
          </Typography>
          <Link href="https://github.com/MaxStenex" target="_blank">
            <IconButton>
              <GitHubIcon style={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
