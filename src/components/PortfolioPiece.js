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
                backgroundSize: "cover",
                width: 300,
                height: 300,
            },
            imageContainer: {
                width: 300,
                height: 300,
                position: "relative"
            },
            siteImage: {
                backgroundImage:  `url(${props.siteImage})`
            },
            codeImage: {
                backgroundImage:  `url(${props.codeImage})`                
            },
            siteClip: {
                clipPath: "polygon(0 0, 100% 100%, 100% 0)"
            },
            codeClip: {
                clipPath: "polygon(0 0, 0% 100%, 100% 100%)"
            },
            selected: false              
        }
        this.hoverSite = this.hoverSite.bind(this);
    }

    hoverSite(){
        if(!this.state.selected) {
            this.setState({codeClip: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }})
            this.setState({siteClip: {
                clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
            }})
            this.setState({selected: true})
        } else {
            this.setState({codeClip: {
                clipPath: "polygon(0 0, 0% 100%, 100% 100%)"
            }})
            this.setState({siteClip: {
                clipPath: "polygon(0 0, 100% 100%, 100% 0)"
            }})
            this.setState({selected: false})           
        }
    }
 
    render() {
        return (
            <Grid item>
            <Card>
                <Typography>{this.state.title}</Typography>
                <Typography>{this.state.blurb}</Typography>
                <div style={this.state.imageContainer}>
                    <div 
                        style={{...this.state.imagePositioning, ...this.state.codeImage, ...this.state.codeClip}}
                        onMouseEnter={this.hoverSite}
                        onMouseLeave={this.hoverSite} />
                    <div style={{...this.state.imagePositioning, ...this.state.siteImage,...this.state.siteClip}} />   
                </div>
            </Card>
        </Grid>
        )
    }
}

export default PortfolioPiece;