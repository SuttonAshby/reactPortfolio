import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import background from '../images/texture-bg.jpg';
import Tri from './Tri.js'

const styles = {
    root: {
        flexGrow: 1,
    },
    landing: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        backgroundImage: `url(${background})`,

    },
    upperRow: {
        height: "50vh",
        width: "100vw",
        maxWidth: "100%",    
        background: "rgba(255,255,255,.5)",
        paddingBottom: "2vh"
    },
    lowerRow: {
        height: "50vh",
        width: "100vw",
        maxWidth: "100%",
        paddingTop: "2vh"    
    }
  };

function Landing(props) {
    const { classes } = props;

    return (
        <div style={styles.landing}>
            <Grid container style={styles.upperRow}
                justify="center"
                alignItems= "flex-end"
            >
                <Tri up="true" />
                <Tri />
                <Tri up="true" />
            </Grid>
            <Grid container style={styles.lowerRow}
                justify="center"
                alignItems= "flex-start"
            >
                <Tri />
                <Tri up="true" />
                <Tri />
            </Grid>
        </div>
    )
}

export default Landing;