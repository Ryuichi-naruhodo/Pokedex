import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './useStyles';

const TopButtons = ({
  id, previousClick, nextClick, handleClick, maxPoke,
}) => {
  const classes = useStyles();

  return (
    <>
      {id > 1 && <Button className={classes.button} variant="contained" onClick={() => previousClick(id)}>Previous</Button>}
      <Button className={classes.button} variant="contained" onClick={() => handleClick()}>Home</Button>
      {id < maxPoke && <Button className={classes.button} variant="contained" onClick={() => nextClick(id)}>Next</Button>}
    </>
  );
};

export default TopButtons;
