import React from "react";
import { Room } from "../types";
import { instance } from "../utils/api";
import { withRouter, RouteComponentProps, NavLink } from "react-router-dom";
import { PageTop, Preloader } from "../components/common";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HotelIcon from "@material-ui/icons/Hotel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 100,
      marginBottom: 100,
      [theme.breakpoints.down("md")]: {
        marginTop: 50,
        marginBottom: 50,
      },
    },
    image: {
      height: "100%",
      minHeight: "300px",
      maxHeight: "300px",
    },
    roomTitle: {
      fontWeight: 700,
      fontSize: 30,
    },
    beds: {
      display: "flex",
      alignItems: "center",
    },
    backButton: {
      backgroundColor: "#F6A716",
      fontWeight: 700,
      fontSize: 18,
      color: "#fff",
      letterSpacing: 1.1,
      textTransform: "none",
    },
  })
);

type Props = RouteComponentProps<{ id: string }>;

const RoomPage: React.FC<Props> = ({ match }) => {
  const [room, setRoom] = React.useState<Room | undefined>(undefined);
  const [loading, setLoading] = React.useState(true);

  const classes = useStyles();

  React.useEffect(() => {
    instance.get("/rooms").then((response) => {
      const rooms: Array<Room> = response.data;
      const room = rooms.filter((room: Room) => room.id === +match.params.id)[0];
      setRoom(room);
      setLoading(false);
    });
  }, [match.params.id]);

  if (!room && !loading) {
    return <span>Not found</span>;
  }

  return !loading && room ? (
    <>
      <PageTop background={room?.largeImage} title={room?.name} />
      <Container className={classes.container} maxWidth="md">
        <Grid container spacing={4} alignItems="stretch">
          <Grid md={6} xs={12} item>
            <CardMedia
              component="img"
              alt="Room photo"
              className={classes.image}
              image={room.largeImage}
            />
          </Grid>
          <Grid
            md={6}
            xs={12}
            item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className="">
              <Typography className={classes.roomTitle} variant="h4">
                {room.name}
              </Typography>
              <Typography variant="h6" className={classes.beds}>
                <HotelIcon style={{ marginRight: 5 }} /> Beds: {room.beds}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Price: {room.price}
                <span style={{ color: "green" }}>$</span>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a, alias
                repudiandae, consectetur magni voluptatibus et rerum illum pariatur
                obcaecati similique molestiae laboriosam beatae labore libero laborum
                vero, tempora cupiditate.
              </Typography>
            </div>

            <NavLink to="/rooms">
              <Button
                variant="contained"
                color="primary"
                className={classes.backButton}
                fullWidth
              >
                Back to all
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  ) : (
    <Preloader />
  );
};

export default withRouter(RoomPage);
