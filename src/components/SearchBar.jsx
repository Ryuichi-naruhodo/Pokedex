import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './useStyles';
import icon from '../assets/pokeIcon.png';

const SearchBar = ({ searchPoke, handleChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid>
          <img src={icon} height={40} width={40} className={classes.searchBarIcon} alt="Pokeball" />
        </Grid>
        <Grid item sm={11} className={classes.labelSearchBar}>
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
