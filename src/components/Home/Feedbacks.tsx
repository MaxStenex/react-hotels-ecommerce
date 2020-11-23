import Container from "@material-ui/core/Container/Container";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "../../redux/feedbacks/actions";
import { RootState } from "../../redux/rootReducer";
import { Feedback } from "../../types";
import { Preloader } from "../common";
import { Slider } from "./";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    feedback: {
      padding: "65px 0px",
      backgroundColor: "#f7f7f7",
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

const Feedbacks: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const feedbacks: Array<Feedback> = useSelector((state: RootState) => state.feedbacks);
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
            Clients Feedback About Us
          </Typography>
          <Typography variant="subtitle1" className={classes.feedbackTitle}>
            Some feedbacks from our clients
          </Typography>
        </div>
        {loading ? <Preloader /> : <Slider feedbacks={feedbacks} />}
      </Container>
    </section>
  );
};

export default Feedbacks;
