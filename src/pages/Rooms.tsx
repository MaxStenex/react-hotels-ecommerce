import React from "react";
import { PageTop } from "../components/common";
import Background from "../assets/rooms_bg.jpg";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Filter, RoomsPreview } from "../components/Rooms";

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
  const roomsPreviewRef = React.useRef<HTMLElement>(null);
  const scrollButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const scrollToRooms = () => {
      roomsPreviewRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollButtonRef.current?.addEventListener("click", scrollToRooms);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      scrollButtonRef.current?.removeEventListener("click", scrollToRooms);
    };
  }, []);

  return (
    <>
      <PageTop
        title="Our exclusive room service"
        subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse neque, distinctio fuga aliquid dignissimos!"
        background={Background}
      >
        <IconButton ref={scrollButtonRef} className={classes.arrowButtonWrapper}>
          <KeyboardArrowDownIcon className={classes.arrowButton} />
        </IconButton>
      </PageTop>
      <Filter />
      <RoomsPreview ref={roomsPreviewRef} />
    </>
  );
};

export default Rooms;
