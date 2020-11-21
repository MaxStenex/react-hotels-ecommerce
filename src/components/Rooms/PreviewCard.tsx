import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      "@media (max-width:480px)": {
        flex: "1 0 100%",
        maxWidth: "100%",
      },
    },
    image: {
      height: 150,
    },
    content: {
      padding: "10px 16px",
      "&.MuiCardContent-root:last-child": {
        paddingBottom: 10,
      },
    },
    header: {
      marginBottom: 8,
      flexWrap: "nowrap",
    },
    name: {
      wordBreak: "break-all",
      marginRight: 10,
    },
    card: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      height: "100%",
    },
  })
);

type Props = {
  image: string;
  price: number;
  name: string;
  peoples: number;
  beds: number;
  roomLevel: string;
};

const PreviewCard: React.FC<Props> = ({
  image,
  price,
  name,
  peoples,
  beds,
  roomLevel,
}) => {
  const classes = useStyles();

  return (
    <Grid item md={3} xs={6} className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <NavLink to="/room">
            <CardMedia image={image} className={classes.image} />
            <CardContent className={classes.content}>
              <Grid container justify="space-between" className={classes.header}>
                <Typography variant="h5" component="h2" className={classes.name}>
                  {name}
                </Typography>
                <Typography variant="h5" color="primary">
                  {price}$
                </Typography>
              </Grid>
              <Typography variant="body2" color="textSecondary" component="p">
                Peoples: {peoples}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Beds: {beds}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {roomLevel.slice(0, 1).toUpperCase() + roomLevel.slice(1).toLowerCase()}
              </Typography>
            </CardContent>
          </NavLink>
        </CardActionArea>
        <CardActions>
          <NavLink to="/room">
            <Button size="small" color="primary">
              View details
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PreviewCard;
