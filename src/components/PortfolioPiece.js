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
                width: 450,
                height: 300,
                // width: "30vw",
                // height: "calc(30vw/1.5)",
            },
            imageContainer: {
                width: 450,
                height: 300,
                // width: "30vw",
                // height: "calc(30vw/1.5)",
                position: "relative",
            },
            card: {
                position: "relative",
                zIndex: "1100"
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
            selected: false,
            title: props.title,
            blurb: props.blurb             
        }
        this.hoverSite = this.hoverSite.bind(this);
        this.hoverCode = this.hoverCode.bind(this);
    }

    hoverCode(){
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

    hoverSite(){
        if(!this.state.selected) {
            this.setState({siteClip: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }})
            this.setState({codeClip: {
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
            <Card style={this.state.card}>
                <Typography>{this.state.title}</Typography>
                <Typography>{this.state.blurb}</Typography>
                <div style={this.state.imageContainer}>
                    <div 
                        style={{...this.state.imagePositioning, ...this.state.codeImage, ...this.state.codeClip}}
                        onMouseEnter={this.hoverCode}
                        onMouseLeave={this.hoverCode} />
                    <div 
                        style={{...this.state.imagePositioning, ...this.state.siteImage,...this.state.siteClip}} 
                        onMouseEnter={this.hoverSite}
                        onMouseLeave={this.hoverSite} />   
                </div>
            </Card>
        </Grid>
        )
    }
}

export default PortfolioPiece;