import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import PoolIcon from "@material-ui/icons/Pool";
import SecurityIcon from "@material-ui/icons/Security";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import React from "react";
import { Link } from "react-router-dom";
import { PageTop, SpecialityCard } from "../components";

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
    speciality: {
      padding: "65px 0px",
    },
    specialityHeader: {
      textAlign: "center",
      marginBottom: 50,
    },
    specialityTitle: {
      fontWeight: 700,
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
        <Button className={classes.linkButton}>
          <Link to="/rooms">Check rooms</Link>
        </Button>
      </PageTop>
      <section className={classes.speciality}>
        <Container maxWidth="md">
          <div className={classes.specialityHeader}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.specialityTitle}
            >
              Our Speciality
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ fontSize: 16 }}
            >
              We offer free additional services to make your travel more
              enjoyable
            </Typography>
          </div>
          <Grid container spacing={3} justify="center" alignItems="stretch">
            <SpecialityCard
              title="Free wifi connection"
              icon={<VoiceChatIcon />}
            />
            <SpecialityCard title="Security" icon={<SecurityIcon />} />
            <SpecialityCard title="Camera Coverage" icon={<VoiceChatIcon />} />
            <SpecialityCard title="Large Pool" icon={<PoolIcon />} />
            <SpecialityCard title="Tour guide" icon={<DirectionsWalkIcon />} />
            <SpecialityCard title="Food and Drink" icon={<FastfoodIcon />} />
            <SpecialityCard title="Meetings" icon={<EmojiPeopleIcon />} />
            <SpecialityCard title="Car parking" icon={<DriveEtaIcon />} />
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home;
