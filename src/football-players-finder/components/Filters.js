import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { createSelector } from 'reselect'
import { setFilters } from "../../actionCreators";

import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';

const styles = theme => ({
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

class Filters extends Component {
  constructor() {
    super();

    this.state = {
        age: "",
        name: "",
        position: "",
    }

  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
            id="name-filter"
            name="name"
            label="Player Name"
            type="string"
            value={this.state.name}
            className={classes.textField}
            onChange={this.handleChange}
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
            id="age-filter"
            name="age"
            label="Age"
            type="number"
            value={this.state.age}
            className={classes.textField}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" onClick={() => { this.props.setFilters(this.state) }} >
            Search
                  </Button>
        </FormControl>
      </form>
    );
  }

}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};

const getPositions = createSelector(
  state => state.positions,
  (position) => { return position }
);

const mapStateToProps = state => {
  return {
    positions: getPositions(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilters(filters) {
      dispatch(setFilters(filters.name, filters.age, filters.position));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Filters));
