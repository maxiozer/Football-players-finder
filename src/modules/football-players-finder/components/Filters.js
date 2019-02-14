import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { getPositions } from '../selectors';
import { setFilters } from "../actionCreators";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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

  handleSubmit = event =>{
    event.preventDefault(); 
    this.props.setFilters(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <ValidatorForm
        className={classes.container}
        ref="form"
        onSubmit={this.handleSubmit}
      >
        <FormControl className={classes.formControl}>
          <TextValidator
            label="Player Name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            validators={['matchRegexp:^[A-Za-z]+$']}
            className={classes.textField}
            errorMessages={['This field only accept characters']}
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
              <MenuItem key={x} value={x}>{x}</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextValidator
              label="Age"
              onChange={this.handleChange}
              name="age"
              type="number"
              value={this.state.age}
              validators={['minNumber:18','maxNumber:40']}
              className={classes.textField}
              errorMessages={['The minimum age is 18', 'The minimum age is 40']}
            />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" type="submit" >
            Search
        </Button>
        </FormControl>
      </ValidatorForm>
    );
  }

}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};


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
