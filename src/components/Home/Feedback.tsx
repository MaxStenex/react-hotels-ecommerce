import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Container from "@material-ui/core/Container/Container";
import { Slider } from "../";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    feedback: {
      padding: "65px 0px",
    },
    feedbackHeader: {
      textAlign: "center",
      marginBottom: 50,
    },
    feedbackTitle: {
      fontWeight: 700,
      marginBottom: 10,
    },
  })
);

const Feedback: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.feedback}>
      <Container maxWidth="md">
        <div className={classes.feedbackHeader}>
          <Typography variant="h4" className={classes.feedbackTitle}>
            Clients Feedback
          </Typography>
          <Typography variant="subtitle1" className={classes.feedbackTitle}>
            Some feedbacks from our clients
          </Typography>
        </div>
        <Slider />
      </Container>
    </section>
  );
};

export default Feedback;
