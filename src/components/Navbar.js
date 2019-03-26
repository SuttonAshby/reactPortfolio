import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex: "1200",

  },
  navbar: {
    background: "rgba(255,255,255,.4)",
  }
};

function Navbar(props) {
  const { classes } = props;

  let current = "Portfolio";

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" >
            {current}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);