import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const styles = theme => ({
    flex: {
        flex: 1,
    },
});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Site Title
            </Typography>
                </Toolbar>
            </AppBar>
        );
    }

}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
