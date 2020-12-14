import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';

const InfoPokemon = ({ pokeData, pokeType, pokeDescription }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.containterPoke} justify="center" alignItems="center" container direction="row">
      <Grid className={classes.descriptionPokemonLeft} item sm={6}>
        <p className={classes.stats}>Size</p>
        <p className={classes.valueStats}>
          {pokeData.height / 10}
          {' '}
          m
        </p>
        <p className={classes.stats}>Weight</p>
        <p className={classes.valueStats}>
          {pokeData.weight / 10}
          {' '}
          kg
        </p>
      </Grid>
      <Grid className={classes.descriptionPokemonRight} item sm={6}>
        <p className={classes.stats}>Type</p>
        {pokeData && (
          <p className={classes.valueStats}>
            {pokeType[0].type.name}
            {' '}
            {pokeType[1] && pokeType[1].type.name}
          </p>
        )}
        <p className={classes.stats}>Habitat</p>
        {pokeDescription.habitat ? (
          <p className={classes.valueStats}>
            {pokeDescription.habitat.name}
          </p>
        ) : <p>None</p>}
      </Grid>
    </Grid>
  );
};

export default InfoPokemon;
