import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import background from '../images/texture-bg.jpg';
import UpTri from './UpTri.js'

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
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "row",
        // flexGrow: 1
    }
  };

function Landing(props) {
    const { classes } = props;

    return (
        <div style={styles.landing}>
            <Grid container style={styles.upperRow}
                justifyContent="center"
                alignItems= "center"
            >
                <UpTri up="true" />
                <UpTri />
                <UpTri up="true" />
            </Grid>
        </div>
    )
}

export default Landing;