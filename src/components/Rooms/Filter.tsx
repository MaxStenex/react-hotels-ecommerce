import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterForm: {
      backgroundColor: "#fff",
      position: "relative",
      bottom: 70,
      padding: "15px 10px",
      borderRadius: 5,
      [theme.breakpoints.down("xs")]: {
        ".MuiContainer-root": {
          backgroundColor: "red",
        },
      },
    },
    container: {
      marginTop: 30,
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
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

  return (
    <form>
      <Container maxWidth="md" className={classes.container}>
        <Grid container className={classes.filterForm} spacing={2} alignItems="center">
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Beds</InputLabel>
              <Select label="Beds">
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Total People</InputLabel>
              <Select label="Total People">
                <MenuItem>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={6}>Six</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={3} xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Room Level</InputLabel>
              <Select label="Room Level">
                <MenuItem>
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
