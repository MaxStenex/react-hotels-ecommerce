import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#e8e8e8",
      borderRadius: 20,
      padding: 20,
      textAlign: "center",
      position: "relative",
      flex: "0 0 48%",
      marginRight: "4%",
      "&:nth-child(2n)": {
        marginRight: 0,
      },
    },
    avatar: {
      left: "50%",
      transform: "translate(-50%)",
      textAlign: "center",
      width: 70,
      height: 70,
      marginBottom: 15,
    },
    name: {
      fontWeight: 700,
      color: "#f6a716",
      textShadow: "1px 1px  black",
    },
  })
);

type Props = {
  avatarURL: string;
  title: string;
  text: string;
};

const Slide: React.FC<Props> = ({ avatarURL, title, text }) => {
  const classes = useStyles();

  return (
    <div className={classes.slide}>
      <Avatar className={classes.avatar} alt="Remy Sharp" src={avatarURL} />
      <Typography className={classes.name} variant="h5">
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </div>
  );
};

export default Slide;
