import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { createSelector } from 'reselect'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const styles = theme => ({
});

class PlayersTable extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.players.map(player =>
            <TableRow key={player.name}>
              <TableCell component="th" scope="row">{player.name}</TableCell>
              <TableCell align="right">{player.position}</TableCell>
              <TableCell align="right">{player.nationality}</TableCell>
              <TableCell align="right">{player.age}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }

}

PlayersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const getPlayers = createSelector(
  (state) => state.players,
  (state) => state.filters,
  (players, filters) => {
    const response = players.filter(player =>{
      return !filters.name || player.name === filters.name 
    }).filter(player =>{
      return !filters.age || parseInt(player.age) === parseInt(filters.age) 
    }).filter(player =>{
      return !filters.position || player.position === filters.position 
    });
    return response;
  }
);

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(PlayersTable));
