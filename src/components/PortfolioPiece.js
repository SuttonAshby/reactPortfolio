import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';

class PortfolioPiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePositioning: {
                position: "absolute",
                top: 0,
                left: 0,
                backgroundSize: "cover"
            },
            imageContainer: {
                width: 300,
                height: 300,
                position: "relative"
            },
            siteImage: {
                backgroundImage:  `url(${props.siteImage})`,
                width: 300,
                height: 300,
                clipPath: "polygon(0 0, 100% 100%, 100% 0)"
            },
            codeImage: {
                backgroundImage:  `url(${props.codeImage})`,
                width: 300,
                height: 300,
                clipPath: "polygon(0 0, 0% 100%, 100% 100%)"
            },
            siteImageSelected: {
    
            },
            codeImageSelected: {
    
            }   
        }
    }
 
    render() {
        return (
            <Grid item>
            <Card>
                <Typography>{props.title}</Typography>
                <Typography>{props.blurb}</Typography>
                <div style={this.state.imageContainer}>
                    <div style={{...this.state.imagePositioning, ...this.state.codeImage}} />
                    <div style={{...this.state.imagePositioning, ...this.state.siteImage}} />   
                </div>
            </Card>
        </Grid>
        )
    }
}

export default PortfolioPiece;