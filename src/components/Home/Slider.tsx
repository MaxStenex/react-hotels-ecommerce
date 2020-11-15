import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import React from "react";
import { Slide } from "../";
import { Feedback } from "../../types";

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

type Props = {
  feedbacks: Array<Feedback>;
};

const Slider: React.FC<Props> = ({ feedbacks }) => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [slidesOnPage, setSlidesOnPage] = React.useState(2);
  const buttons = Array(feedbacks.length / slidesOnPage);

  React.useEffect(() => {
    const onResize = (evt: any) => {
      setCurrentSlide(0);
      if (window.innerWidth <= 600) {
        return setSlidesOnPage(1);
      }
      setSlidesOnPage(2);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [slidesOnPage]);

  return (
    <>
      <div className={classes.slider}>
        <div
          className={classes.sliderWrapper}
          ref={sliderRef}
          style={{
            left: `${
              (sliderRef.current &&
                sliderRef.current.clientWidth * -currentSlide) ||
              0
            }px`,
          }}
        >
          {feedbacks.map((feedback: Feedback) => {
            return (
              <Slide
                key={feedback.avatarURL}
                avatarURL={feedback.avatarURL}
                title={feedback.name}
                text={feedback.text}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.buttons}>
        {Array.from(buttons).map((item, index) => {
          return (
            <IconButton
              key={index}
              aria-label="delete"
              onClick={() => {
                setCurrentSlide(index);
              }}
            >
              <RadioButtonCheckedIcon
                color={index === currentSlide ? "primary" : "inherit"}
                className={classes.button}
              />
            </IconButton>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
