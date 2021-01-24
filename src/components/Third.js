import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MuiTableCell from "@material-ui/core/TableCell";

const TableCell = withStyles((theme) => ({
  root: {
    borderBottom: "none"
  },
  head: {
    color: theme.palette.text.secondary,
  },

}))(MuiTableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    backgroundColor: "#0a0a0a",
  },
  root: {
    borderBottom: "none"
  },
  highLight: {
    color: theme.palette.text.highLight
  }
}));

export default function Third({ thirdData }) {

  const data = thirdData
  const rows = data
  const classes = useStyles();


  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>currency</TableCell>
              <TableCell >rate</TableCell>
              <TableCell >timestamp</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rate}>
                <TableCell>{row.currency}</TableCell>
                <TableCell align="left">{row.rate}</TableCell>
                <TableCell className={classes.highLight} align="left">{row.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
