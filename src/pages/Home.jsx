import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import TitleHome from '../components/TitleHome';
import CardPokemon from '../components/CardPokemon';
import useStyles from './useStyles';
import usePagination from '../components/usePagination';

const Home = () => {
  const classes = useStyles();
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokedex, setPokedex] = useState([]);
  const [searchPoke, setSearchPoke] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 28;
  const DATA = usePagination(searchResult, PER_PAGE);
  const count = Math.ceil(searchResult.length / PER_PAGE);

  useEffect(() => {
    const displayPokedex = () => {
      axios.get(`${pokeUrl}?limit=649`)
        .then((res) => {
          const pokeData = res.data.results;
          const pokeName = pokeData.map((item, key) => ({ name: item.name, id: key }));
          setPokedex(pokeName);
          setSearchResult(pokeName);
        });
    };
    displayPokedex();
  }, []);

  useEffect(() => {
    const results = pokedex.filter((poke) => poke
      .name.toLowerCase().includes(searchPoke.toLowerCase()));
    setSearchResult(results);
  }, [searchPoke]);

  const handleChange = (e) => {
    setSearchPoke(e.target.value);
  };

  const handleChangePage = (e, p) => {
    setPage(p);
    DATA.jump(p);
  };

  return (
    <>
      <div className={classes.root}>
        <TitleHome />
        <form style={{ padding: 20 }}>
          <label className={classes.name} htmlFor="pokemon">
            Find a specific pokemon :
            <input
              className={classes.input}
              type="text"
              value={searchPoke}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <Grid
        justify="center"
        alignItems="center"
        container
        spacing={1}
      >
        {DATA.currentData().map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
      <Grid
        className={classes.pagination}
        container
        item
        justify="center"
        sm={12}
      >
        <Pagination
          count={count}
          size="large"
          page={page}
          shape="rounded"
          onChange={handleChangePage}
          variant="outlined"
        />
      </Grid>
    </>
  );
};

export default Home;
