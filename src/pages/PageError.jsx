import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../components/useStyles';
import logo from '../assets/logoError.png';

const PageError = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.errorPage}>
        <Link to="/">
          <Button className={classes.buttonError}>
            Go Home
          </Button>
        </Link>
        <Grid container variant="contained" justify="center" alignItems="center" direction="row">
          <img src={logo} width="600" height="350" alt="Error page" />
        </Grid>
      </div>
    </>
  );
};

export default PageError;
