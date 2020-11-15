import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      marginBottom: 20,
      overflowX: "hidden",
    },
    sliderWrapper: {
      display: "flex",
      position: "relative",
      transition: "all .4s ease",
    },
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

const Slider = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slider = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={classes.slider}>
        <div
          className={classes.sliderWrapper}
          ref={slider}
          style={{
            left: `${
              (slider.current && slider.current.clientWidth * -currentSlide) ||
              0
            }px`,
          }}
        >
          <div className={classes.slide}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"
            />
            <Typography className={classes.name} variant="h5">
              Test Name
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut
              officia quam dicta quos maxime.
            </Typography>
          </div>
          <div className={classes.slide}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"
            />
            <Typography className={classes.name} variant="h5">
              Test Name
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut
              officia quam dicta quos maxime.
            </Typography>
          </div>
          <div className={classes.slide}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"
            />
            <Typography className={classes.name} variant="h5">
              Test Name
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut
              officia quam dicta quos maxime.
            </Typography>
          </div>
          <div className={classes.slide}>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg"
            />
            <Typography className={classes.name} variant="h5">
              Test Name
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut
              officia quam dicta quos maxime.
            </Typography>
          </div>
        </div>
      </div>
      <div className="buttons">
        <IconButton
          aria-label="delete"
          onClick={() => {
            setCurrentSlide(0);
          }}
        >
          <RadioButtonCheckedIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            setCurrentSlide(1);
          }}
        >
          <RadioButtonCheckedIcon />
        </IconButton>
      </div>
    </>
  );
};

export default Slider;
