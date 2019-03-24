import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import background from '../images/texture-bg.jpg';
import Tri from './Tri.js'
import aboutImage from '../images/about.png';
import contactImage from '../images/contact.png';
import craneImage from '../images/crane.jpg';
import developerImage from '../images/developer.png';
import headshotImage from '../images/headshot.jpg';
import selectedWorksImage from '../images/selectedWorks.png';



const styles = {
    root: {
        flexGrow: 1,
    },
    landing: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        backgroundImage: `url(${background})`,
        position: "fixed",
        top: 0

    },
    upperRow: {
        height: "50vh",
        width: "100vw",
        maxWidth: "100%",    
        background: "rgba(255,255,255,.5)",
        paddingBottom: "2vh",
        // overflow: "hidden"
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
                <Tri up="true" transform="14vw" image={craneImage}/>
                <Tri image={selectedWorksImage}/>
                <Tri up="true" transform="-14vw" image={headshotImage}/>
            </Grid>
            <Grid container style={styles.lowerRow}
                justify="center"
                alignItems= "flex-start"
            >
                <Tri transform="14vw" image={aboutImage}/>
                <Tri up="true" image={contactImage}/>
                <Tri transform="-14vw" image={developerImage}/>
            </Grid>
        </div>
    )
}

export default Landing;