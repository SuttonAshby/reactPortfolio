import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Tri (props) {

    const styles = {
        UpTri:{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            width: '33vw',
            height: 'calc(33vw/1.5)',
            transform: `translateX(${props.transform})`    
        },
        DownTri:{
            clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            width: '33vw',
            height: 'calc(33vw/1.5)',
            transform: `translateX(${props.transform})`        
        }
    }   

    if(props.up){
        return <div style={styles.UpTri} />
    } 
    return <div style={styles.DownTri} />

}

export default Tri;