import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';

function PortfolioPiece (props) {

    const styles = {
        imagePositioning: {
            position: "absolute",
            top: 0,
            left: 0,
            backgroundSize: "cover"
        },
        siteImage: {
            backgroundImage:  `url(${props.siteImage})`
        },
        codeImage: {
            backgroundImage:  `url(${props.codeImage})`
        }
    }
    return (
        <Grid>
            <Card>
                <Typography>{props.title}</Typography>
                <Typography>{props.blurb}</Typography>
                <div>
                    <div style={{...styles.imagePositioning, ...styles.codeImage}} />
                    <div style={{...styles.imagePositioning, ...styles.siteImage}} />   
                </div>
            </Card>
        </Grid>
    )
}

export default PortfolioPiece;