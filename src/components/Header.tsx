import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import EmailIcon from '@material-ui/icons/Email';

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
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.headerTop}>
      <Container maxWidth='lg'>
        <Breadcrumbs style={{ color: '#fff' }} separator='/'>
          <Grid
            container
            direction='row'
            alignItems='center'
            style={{ marginRight: '15px' }}
          >
            <PhoneIcon className={classes.icon} fontSize='small' />
            <Typography>+123 4567 8910</Typography>
          </Grid>
          <Grid
            container
            direction='row'
            alignItems='center'
            style={{ marginLeft: '15px' }}
          >
            <EmailIcon className={classes.icon} fontSize='small' />
            <Typography>example@gmail.com</Typography>
          </Grid>
        </Breadcrumbs>
      </Container>
    </Grid>
  );
};

export default Header;
