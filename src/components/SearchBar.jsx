import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './useStyles';
import icon from '../assets/pokeIcon.png';

const SearchBar = ({ searchPoke, handleChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <img src={icon} height={30} width={30} className={classes.searchBarIcon} alt="Pokeball" />
        </Grid>
        <Grid item>
          <TextField
            className={classes.labelSearchBar}
            type="text"
            value={searchPoke}
            onChange={handleChange}
            label="Search your Pokemon"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
