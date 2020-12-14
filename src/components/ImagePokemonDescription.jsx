import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const PokeDetails = ({ pokeData, pokeDescription, id }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <img className={classes.imgPoke} src={pokeData.sprites.other.dream_world.front_default} alt="poke" />
      <div className={classes.pagination} />
      <Typography variant="h3" className={classes.nameDetails}>
        N°
        {id}
        {' '}
        <span style={{ fontWeight: 'bold' }}>{pokeData.name}</span>
      </Typography>
      <Typography className={classes.descriptionDetails}>
        {pokeDescription.flavor_text_entries[1].flavor_text}
      </Typography>
    </Grid>
  );
};

export default PokeDetails;
