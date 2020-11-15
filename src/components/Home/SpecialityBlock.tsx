import { createStyles, makeStyles, Theme } from "@material-ui/core";
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
import { SpecialityCard } from "../";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speciality: {
      padding: "65px 0px",
      borderBottom: "2px solid #093D77",
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

const SpecialityBlock = () => {
  const classes = useStyles();

  return (
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
            We offer free additional services to make your travel more enjoyable
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
  );
};

export default SpecialityBlock;
