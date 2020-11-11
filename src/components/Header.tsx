import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import EmailIcon from '@material-ui/icons/Email';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assets/logo.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerTop: {
      backgroundColor: '#093D77',
      padding: '15px 0px',
      letterSpacing: '1px',
    },
    icon: {
      marginRight: '7px',
    },
    logo: {
      height: '50px',
      width: '100px',
      marginLeft: '15px',
      marginRight: '15px',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100px',
        margin: '0px 0px',
        marginBottom: '20px',
      },
    },
    headerBottom: {
      padding: '15px 0px',
    },
    headerBottomContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    navigation: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        flexWrap: 'wrap',
      },
    },
    link: {
      marginRight: '15px',
      fontWeight: 500,
      minWidth: '100px',
      '&:last-child': {
        marginRight: 0,
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        flex: '100%',
        marginBottom: '15px',
      },
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header>
      <Grid container className={classes.headerTop}>
        <Container maxWidth='lg'>
          <Breadcrumbs style={{ color: '#fff' }} separator='/'>
            <Grid container direction='row' alignItems='center'>
              <PhoneIcon className={classes.icon} fontSize='small' />
              <Typography>+123 4567 8910</Typography>
            </Grid>
            <Grid container direction='row' alignItems='center'>
              <EmailIcon className={classes.icon} fontSize='small' />
              <Typography>example@gmail.com</Typography>
            </Grid>
          </Breadcrumbs>
        </Container>
      </Grid>
      <Grid container className={classes.headerBottom}>
        <Container maxWidth='lg' className={classes.headerBottomContainer}>
          <a href='_blank'>
            <img className={classes.logo} src={Logo} alt='logo' />
          </a>
          <Toolbar className={classes.navigation}>
            <Button
              className={classes.link}
              href='#'
              variant='contained'
              color='primary'
            >
              Home
            </Button>
            <Button
              className={classes.link}
              href='#'
              variant='contained'
              color='primary'
            >
              Rooms
            </Button>
          </Toolbar>
        </Container>
      </Grid>
    </header>
  );
};

export default Header;
