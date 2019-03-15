import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import data from '../portfolioData.json'
import PortfolioPiece from './PortfolioPiece.js';

const styles = {
    selectedWorks: {
        width: "100vw",
        maxWidth: "100%",
        minHeight: "100vh",
    }
}


function SelectedWorks (props) {

    const works = data.works.map((item) => {
        console.log(item.codeImage)
        console.log(item.siteImage)
        return <PortfolioPiece 
            title={item.title}
            blurb={item.blurb}
            siteImage={item.siteImage}
            codeImage={item.codeImage}
            />
    })

    return (
        <Grid container style={styles.selectedWorks}>
            {works}
        </Grid>
    )

}

export default SelectedWorks;