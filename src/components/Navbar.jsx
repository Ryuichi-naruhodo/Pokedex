import {
  AppBar, Toolbar, Typography, makeStyles, fade,
} from '@material-ui/core';
import React from 'react';
import './navbar.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rootToolbar: {
    flexGrow: 1,
    backgroundColor: '#b51e1e',
  },
  buttons: {
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
}));

const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <AppBar className={classes.rootToolbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className="logo" onClick={() => handleClick()}>
            EncycloPedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
