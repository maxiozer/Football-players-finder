import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { createSelector } from 'reselect'

import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  grid: {
    marginTop: 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
  },

});

class FootBallPlayerFinder extends Component {
  constructor() {
    super();

    this.state = {
      position: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Site Title
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={24} className={classes.grid}>
          <Grid item xs={12}>
            <Typography variant="display1" align="left" gutterBottom>
              Football Player Finder 
            </Typography>

            <form className={classes.container} noValidate autoComplete="off">
              <FormControl className={classes.formControl}>
                <TextField
                  id="name"
                  label="Player Name"
                  type="string"
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="position-select">Position</InputLabel>
                <Select
                  value={this.state.position}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'position',
                    id: 'position-select',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {this.props.positions.map(x =>
                    <MenuItem value={x}>{x}</MenuItem>
                  )}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  id="age"
                  label="Age"
                  type="number"
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <Button variant="contained" color="primary">
                  Search
                  </Button>
              </FormControl>
            </form>
          </Grid>
          <Grid item xs={12}>
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
                <TableRow key="1">
                  <TableCell component="th" scope="row">
                    messi
                  </TableCell>
                  <TableCell align="right">Delantero</TableCell>
                  <TableCell align="right">Barcelona</TableCell>
                  <TableCell align="right">32</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    );
  }

}

FootBallPlayerFinder.propTypes = {
  classes: PropTypes.object.isRequired,
};

const getPositions = createSelector(
  state => state.positions,
  (position) => {return position}
);

const mapStateToProps = state => {
  return {
    positions: getPositions(state)
  }
}

export default connect(mapStateToProps)(withStyles(styles)(FootBallPlayerFinder));
