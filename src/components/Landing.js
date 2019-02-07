import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import background from '../images/texture-bg.jpg'

const styles = {
    root: {
        flexGrow: 1,
    },
    landing: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        backgroundImage: `url(${background})`
    }
  };

function Landing(props) {
    const { classes } = props;

    return (
        <div style={styles.landing}>

        </div>
    )
}

export default Landing;