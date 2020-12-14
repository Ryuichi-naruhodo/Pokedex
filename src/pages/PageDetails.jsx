import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import useStyles from '../components/useStyles';
import TopButtons from '../components/TopButtons';
import StatsPokemon from '../components/StatsPokemon/StatsPokemon';
import InfoPokemon from '../components/InfoPokemon';
import ImagePokemonDescription from '../components/ImagePokemonDescription';
import PageError from './PageError';

const PageDetails = () => {
  const urlPoke = 'https://pokeapi.co/api/v2/pokemon/';
  const urlPokeDescription = 'https://pokeapi.co/api/v2/pokemon-species/';
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const maxPokemon = 649;
  const [pokeData, setPokeData] = useState('');
  const [pokeType, setPokeType] = useState('');
  const [pokeDescription, setPokeDescription] = useState('');
  const [pokeStats, setPokeStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      const [poke, descri] = await Promise.all([
        axios.get(`${urlPoke}${id}`),
        axios.get(`${urlPokeDescription}${id}`),
      ]);
      setPokeData(poke.data);
      setPokeType(poke.data.types);
      setPokeDescription(descri.data);
      if (pokeStats) { setPokeStats([]); }
      const stats = poke.data.stats.map((item) => ({
        stat: item.base_stat,
        type: item.stat.name,
      }));
      setPokeStats(stats);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleClick = () => {
    history.push('/');
  };
  const previousClick = (index) => {
    const numb = parseInt(index, 10);
    history.push(`/page-details/${numb - 1}`);
  };
  const nextClick = (index) => {
    const numb = parseInt(index, 10);
    history.push(`/page-details/${numb + 1}`);
  };

  if (loading) {
    return (
      <Grid style={{ height: '100%', width: '100%' }} justify="center" alignItems="center" container direction="row">
        <CircularProgress />
        ;
      </Grid>
    );
  }
  if (error) return <PageError />;

  return (
    <>
      <div className={classes.pageDetails}>
        <Grid container direction="row" justify="space-between" alignItems="flex-start">
          <TopButtons
            maxPoke={maxPokemon}
            id={id}
            handleClick={handleClick}
            previousClick={previousClick}
            nextClick={nextClick}
          />
        </Grid>
        <Grid className={classes.containterPoke} justify="center" alignItems="center" container direction="row" spacing={6}>
          <Grid item sm={1} />
          <ImagePokemonDescription id={id} pokeData={pokeData} pokeDescription={pokeDescription} />
          <Grid item xs={12} sm={4}>
            <InfoPokemon
              pokeData={pokeData}
              pokeType={pokeType}
              pokeDescription={pokeDescription}
            />
            <div className={classes.pagination} />
            <StatsPokemon pokeStats={pokeStats} />
          </Grid>
          <Grid item sm={1} />
        </Grid>
        <div className={classes.pagination} />
        <div className={classes.pagination} />
        <div className={classes.pagination} />
      </div>
    </>
  );
};

export default PageDetails;
