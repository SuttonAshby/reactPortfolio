import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import background from '../images/texture-bg.jpg';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import SelectedWorks from '../components/SelectedWorks';
import Navbar from '../components/Navbar';
import Grid from '@material-ui/core/Grid';


const styles = {
    root: {
        flexGrow: 1,
    },
    scrollable: {
        backgroundImage: `url(${background})`,
        zIndex: "auto",
        background: "red",
        height: "100vh",
        width: "100vw",
        maxWidth: "100%"

    }
}

function Scrollable(props) {
    const { classes } = props;

    return (
        <Grid container style={styles.scrollable}>
            <Navbar />
            <SelectedWorks />
            <About />
            <Contact />  
        </Grid>
    )
}

export default Scrollable;