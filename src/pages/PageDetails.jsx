import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Grid, Button, Typography, CircularProgress, LinearProgress,
} from '@material-ui/core';
import axios from 'axios';
import useStyles from './useStyles';
import StatsPokemon from '../components/StatsPokemon';

const PageDetails = () => {
  const urlPoke = 'https://pokeapi.co/api/v2/pokemon/';
  const urlPokeDescription = 'https://pokeapi.co/api/v2/pokemon-species/';
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [pokeData, setPokeData] = useState();
  const [pokeType, setPokeType] = useState();
  const [pokeDescription, setPokeDescription] = useState();
  const [pokeStats, setPokeStats] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataPoke = async () => {
      try {
        const poke = await axios.get(`${urlPoke}${id}`);
        const descri = await axios.get(`${urlPokeDescription}${id}`);
        setPokeData(poke.data);
        setPokeType(poke.data.types);
        setPokeDescription(descri.data);
        const stats = poke.data.stats.map((item, key) => ({
          stat: item.base_stat,
          type: item.stat.name,
        }));
        setPokeStats(stats);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getDataPoke();
  }, []);
  const handleClick = () => {
    history.push('/');
  };

  return (Loading ? <CircularProgress />
    : (
      <div className={classes.pageDetails}>
        <Button className={classes.button} variant="contained" onClick={() => handleClick()}>Home</Button>
        <Typography variant="h3" align="center" className={classes.nameDetails}>
          {pokeData.name}
          {' '}
          N°
          {id}
        </Typography>
        <Grid className={classes.containterPoke} justify="center" alignItems="center" container direction="row">
          <Grid item sm={1} />
          <Grid className={classes.imgPoke} item xs={10} sm={4}>
            {pokeData
        && <img className={classes.imgPoke} src={pokeData.sprites.other.dream_world.front_default} alt="poke" />}
          </Grid>
          <Grid item className={classes.descriptionDetails} xs={10} sm={4}>
            {pokeDescription
          && (
          <Typography className={classes.descriptionDetails}>
            {pokeDescription.flavor_text_entries[1].flavor_text}
          </Typography>
          )}
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
        </Grid>
        <Grid className={classes.table} container justify="center" alignItems="center" direction="row">
          <Grid item xs={7} sm={6}>
            <StatsPokemon pokeStats={pokeStats} />
          </Grid>
        </Grid>
      </div>
    )
  );
};

export default PageDetails;
