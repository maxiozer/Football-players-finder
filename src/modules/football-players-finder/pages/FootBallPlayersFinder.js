import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { findPlayers } from "../actionCreators";
import { PlayersTable, Filters } from "../components";
import {Header} from "../../core/components";

import {
  Typography,
  Grid,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    marginTop: 2
  },
});

const FootBallPlayerFinder = (props) => {
  const { classes, findPlayers } = props;
  findPlayers();

  return (
    <div className={classes.root}>
      <Header />
      <Grid container spacing={24} className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="display1" align="left" gutterBottom>Football Player Finder</Typography>
          <Filters />
        </Grid>
        <Grid item xs={12}>
          <PlayersTable />
        </Grid>
      </Grid>
    </div>
  );
}

FootBallPlayerFinder.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    findPlayers() {
      dispatch(findPlayers());
    },
  }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(FootBallPlayerFinder));
