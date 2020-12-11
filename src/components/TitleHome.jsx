import React from 'react';
import {
  Grid, Typography,
} from '@material-ui/core';
import useStyles from '../pages/useStyles';

const TitleHome = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.section}>
      <h1 className={classes.title}>Pokedex - List of Pokemon</h1>
      <Typography className={classes.name}>
        Welcome to the page specially dedicated to all the Pokémon of the Pokédex.
        You&rsquo;ll be able to find all the Pokémon of each generation
      </Typography>
    </Grid>
  );
};

export default TitleHome;
