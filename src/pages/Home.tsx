import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import { PageTop, SpecialityBlock, Footer, Feedback } from "../components";

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
    <>
      <PageTop
        title="Get best travel offers, super rooms, meeting and more."
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure vero accusamus, eos laboriosam aut."
      >
        <Link to="/rooms">
          <Button className={classes.linkButton}>Check rooms</Button>
        </Link>
      </PageTop>
      <SpecialityBlock />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
