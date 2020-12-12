import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Grid, Button, Typography, CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import useStyles from '../components/useStyles';
import StatsPokemon from '../components/StatsPokemon';
import PokeDetails from '../components/PokeDetails';

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
        const stats = poke.data.stats.map((item) => ({
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
          <PokeDetails pokeType={pokeType} pokeData={pokeData} pokeDescription={pokeDescription} />
        </Grid>
        <Grid className={classes.table} container justify="center" alignItems="center" direction="row">
          <Grid item xs={7} sm={9}>
            <StatsPokemon pokeStats={pokeStats} />
          </Grid>
        </Grid>
      </div>
    )
  );
};

export default PageDetails;
