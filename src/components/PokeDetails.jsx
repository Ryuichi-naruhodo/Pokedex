import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';

const PokeDetails = ({ pokeData, pokeDescription, pokeType }) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.imgPoke} item xs={10} sm={4}>
        <img className={classes.imgPoke} src={pokeData.sprites.other.dream_world.front_default} alt="poke" />
      </Grid>
      <Grid item className={classes.descriptionDetails} xs={10} sm={4}>
        <Grid
          className={classes.Vcaracteristiques}
          direction="row"
          container
          spacing={4}
        >
          <Grid className={classes.descriptionPokemonLeft} item xs={6}>
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
          <Grid className={classes.descriptionPokemonRight} item xs={6}>
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
      </Grid>
    </>
  );
};

export default PokeDetails;
