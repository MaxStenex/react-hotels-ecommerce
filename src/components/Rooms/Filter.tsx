import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { useHistory } from "react-router-dom";
import queryString from "querystring";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredRooms } from "../../redux/rooms/actions";
import { RootState } from "../../redux/rootReducer";
import { Room } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterForm: {
      backgroundColor: "#fff",
      position: "relative",
      bottom: 70,
      padding: "15px 10px",
      borderRadius: 5,
      boxShadow: "0px 0px 10px black",
    },
    container: {
      marginTop: 30,
    },
    submitButton: {
      backgroundColor: "#F6A716",
      fontWeight: 700,
      fontSize: 18,
      color: "#fff",
      letterSpacing: 1.1,
      textTransform: "none",
    },
  })
);

const Filter: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();
  // const searchString = queryString.parse(history.location.search.slice(1));

  const [filter, setFilter] = React.useState({ beds: 0, peoples: 0, roomLevel: "" });

  const dispatch = useDispatch();
  const rooms: Array<Room> = useSelector((state: RootState) => state.rooms.allRooms);

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(
          setFilteredRooms(
            rooms.filter((room: Room) => {
              if (filter.beds && room.beds !== filter.beds) return false;
              if (filter.peoples && room.totalPeoples !== filter.peoples) return false;
              if (filter.roomLevel && room.roomLevel !== filter.roomLevel) return false;
              return true;
            })
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filter, dispatch, rooms]);

  return (
    <form>
      <Container maxWidth="md" className={classes.container}>
        <Grid container className={classes.filterForm} spacing={2} alignItems="center">
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Beds</InputLabel>
              <Select
                label="Beds"
                value={filter.beds}
                onChange={(evt: React.ChangeEvent<{ value: unknown }>) => {
                  setFilter({ ...filter, beds: evt.target.value as number });
                }}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Total People</InputLabel>
              <Select
                label="Total People"
                value={filter.peoples}
                onChange={(evt: React.ChangeEvent<{ value: unknown }>) => {
                  setFilter({ ...filter, peoples: evt.target.value as number });
                }}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Room Level</InputLabel>
              <Select
                label="Room Level"
                value={filter.roomLevel}
                onChange={(evt: React.ChangeEvent<{ value: unknown }>) => {
                  setFilter({ ...filter, roomLevel: evt.target.value as string });
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="common">Common</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitButton}
              fullWidth
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Filter;
