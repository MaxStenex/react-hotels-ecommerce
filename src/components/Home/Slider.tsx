import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Slide } from "../";

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
    buttons: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      fontSize: 29,
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
          <Slide
            avatarURL="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1844&q=80"
            title="Maxim"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nisi perspiciatis iste ullam suscipit illum."
          />
        </div>
      </div>
      <div className={classes.buttons}>
        <IconButton
          aria-label="delete"
          onClick={() => {
            setCurrentSlide(0);
          }}
        >
          <RadioButtonCheckedIcon color="primary" className={classes.button} />
        </IconButton>
      </div>
    </>
  );
};

export default Slider;
