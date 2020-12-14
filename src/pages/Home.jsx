import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import TitleHome from '../components/TitleHome';
import CardPokemon from '../components/CardPokemon';
import SearchBar from '../components/SearchBar';
import useStyles from '../components/useStyles';
import usePagination from '../components/usePagination';

const Home = () => {
  const classes = useStyles();
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokedex, setPokedex] = useState([]);
  const [searchPoke, setSearchPoke] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 28;
  const DATA = usePagination(searchResult, perPage);
  const count = Math.ceil(searchResult.length / perPage);

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

  const handleChangePage = (e, p) => {
    setPage(p);
    DATA.jump(p);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setSearchPoke(e.target.value);
    handleChangePage(0, 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <TitleHome />
      <SearchBar handleChange={handleChange} searchPoke={searchPoke} />
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
          color="primary"
          count={count}
          size="large"
          page={page}
          shape="rounded"
          onChange={handleChangePage}
          variant="outlined"
        />
      </Grid>
    </div>
  );
};

export default Home;
