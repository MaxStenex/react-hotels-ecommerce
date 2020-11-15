import Container from "@material-ui/core/Container/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "..";
import { RootState } from "../../redux";
import { getFeedbacks } from "../../redux/feedbacks";
import { Feedback } from "../../types";
import Preloader from "../../assets/Preloader.gif";

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
    preloader: {
      display: "flex",
      width: "250px",
      height: "250px",
      margin: "0 auto",
    },
  })
);

const Feedbacks: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const feedbacks: Array<Feedback> = useSelector(
    (state: RootState) => state.feedbacks
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await dispatch(getFeedbacks());
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

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
        {loading ? (
          <img src={Preloader} alt="Loading..." className={classes.preloader} />
        ) : (
          <Slider feedbacks={feedbacks} />
        )}
      </Container>
    </section>
  );
};

export default Feedbacks;
