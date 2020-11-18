import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/home_bg.jpg";
import { Footer, PageTop } from "../components/common";
import { Feedbacks, SpecialityBlock } from "../components/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkButton: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 17,
      backgroundColor: "#F6A716",
      border: "2px solid #F6A716",
      textShadow: "1px 1px black",
      padding: "5px 25px",
      marginTop: "35px",
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
      <PageTop
        title="Get best travel offers, super rooms, meeting and more."
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure vero accusamus, eos laboriosam aut."
        background={Background}
      >
        <Link to="/rooms">
          <Button className={classes.linkButton}>Check rooms</Button>
        </Link>
      </PageTop>
      <SpecialityBlock />
      <Feedbacks />
      <Footer />
    </section>
  );
};

export default Home;
