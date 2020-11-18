import React from "react";
import { PageTop } from "../components/common";
import Background from "../assets/rooms_bg.jpg";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Filter } from "../components/Rooms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrowButtonWrapper: {
      marginTop: 65,
      border: "3px solid #F6A716",
      [theme.breakpoints.down("xs")]: {
        marginTop: 35,
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    arrowButton: {
      color: "#F6A716",
      fontSize: 28,
    },
  })
);

const Rooms: React.FC = () => {
  const classes = useStyles();

  return (
    <section>
      <PageTop
        title="Our exclusive room service"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse neque, distinctio fuga aliquid dignissimos!"
        background={Background}
      >
        <IconButton className={classes.arrowButtonWrapper}>
          <KeyboardArrowDownIcon className={classes.arrowButton} />
        </IconButton>
      </PageTop>
      <Filter />
    </section>
  );
};

export default Rooms;
