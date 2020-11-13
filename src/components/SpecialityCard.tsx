import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minHeight: "130px",
      height: "100%",
      "&:hover": {
        transition: "0.3s",
        transform: "scale(1.07)",
      },
    },
    cardContent: {
      textAlign: "center",
      padding: "20px 30px",
      "& svg": {
        fontSize: 39,
      },
    },
  })
);

type Props = {
  title: string;
  icon: React.ReactNode;
};

const SpecialityCard: React.FC<Props> = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <Grid item md={3} sm={4} xs={12}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {icon}
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SpecialityCard;
