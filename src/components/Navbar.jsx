import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <AppBar className={classes.rootToolbar} elevation={0} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logo} onClick={() => handleClick()}>
            EncycloPedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
