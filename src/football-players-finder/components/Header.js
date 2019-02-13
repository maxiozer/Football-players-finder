import React from 'react';
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

function Header(props) {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>React Test</Typography>
            </Toolbar>
        </AppBar>
    );

}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);
