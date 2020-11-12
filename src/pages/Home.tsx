import Button from '@material-ui/core/Button';
import React from 'react';
import { PageTop } from '../components';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkButton: {
      color: '#fff',
      fontWeight: 700,
      marginTop: '80px',
      fontSize: '17px',
      backgroundColor: '#F6A716',
      border: '2px solid #F6A716',
      textShadow: '1px 1px black',
      padding: '5px 25px',
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <PageTop
      title='Get best travel offers, super rooms, meeting and more.'
      subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure vero accusamus, eos laboriosam aut.'
    >
      <Button className={classes.linkButton}>
        <Link to='/rooms'>Check rooms</Link>
      </Button>
    </PageTop>
  );
};

export default Home;
