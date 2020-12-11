import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from '../pages/useStyles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StatsPokemon = ({ pokeStats }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {pokeStats.map((pokeStat, key) => (
              <StyledTableCell key={key} align="center">{pokeStat.type}</StyledTableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {pokeStats.map((pokeStat, key) => (
              <StyledTableCell key={key} align="center" component="th" scope="row">
                {pokeStat.stat}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatsPokemon;
