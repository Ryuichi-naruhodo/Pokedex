import {
  Card, CardMedia,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';

const CardPokemon = ({ pokemon }) => {
  const classes = useStyles();
  const history = useHistory();
  const imgPoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  const handleClick = (id) => {
    history.push(`/page-details/${id + 1}`);
  };

  return (
    <Card
      className={classes.cardContainer}
      key={pokemon.id}
      onClick={() => handleClick(pokemon.id)}
    >
      <CardMedia
        className={classes.icon}
        image={`${imgPoke}${pokemon.id + 1}.png`}
      />
      <span className={classes.name}>
        #
        {' '}
        {pokemon.id + 1}
        {' '}
        :
        {' '}
        {pokemon.name}
      </span>
    </Card>
  );
};

export default CardPokemon;
