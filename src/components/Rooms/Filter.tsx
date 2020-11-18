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
              <Select label="Total People">
                <MenuItem>
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
