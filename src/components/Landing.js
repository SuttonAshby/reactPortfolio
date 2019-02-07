import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
        backgroundImage: `url(${background})`
    },
    upperRow: {
        height: "50vh",
        width: "100vw",
        maxWidth: "100%",    
        background: "rgba(255,255,255,.5)"            
    }
  };

function Landing(props) {
    const { classes } = props;

    return (
        <div style={styles.landing}>
            <div style={styles.upperRow}>
                <UpTri />
            </div>
        </div>
    )
}

export default Landing;