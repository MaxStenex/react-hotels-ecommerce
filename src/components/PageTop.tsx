import Background from '../assets/big_bg.jpg';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      color: '#fff',
      background: `url(${Background}) no-repeat center center/cover`,
      padding: '150px 0px 200px 0px',
      position: 'relative',
      textAlign: 'center',
      textShadow: '2px 2px black',
    },
    shadow: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.45)',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    title: {
      fontWeight: 500,
      marginBottom: '15px',
    },
    container: {
      position: 'relative',
      zIndex: 15,
    },
    subtitle: {
      fontSize: '16px',
    },
  })
);

type PageTopProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const PageTop: React.FC<PageTopProps> = ({ title, subtitle, children }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Grid className={classes.shadow}></Grid>
      <Container className={classes.container} maxWidth='md'>
        <Typography className={classes.title} variant='h3' component='h2'>
          {title}
        </Typography>
        <Typography className={classes.subtitle} variant='subtitle1'>
          {subtitle}
        </Typography>
        {children}
      </Container>
    </section>
  );
};

export default PageTop;
