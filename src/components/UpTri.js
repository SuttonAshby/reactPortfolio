import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = {
    UpTri:{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        background: "rgba(255,255,255,1)",
        width: '33vw',
        height: 'calc(33vw/1.5)'
    },
    DownTri:{
        clipPath: "polygon(50% 100%, 0 0, 100% 0)",
        background: "rgba(255,255,255,1)",
        width: '33vw',
        height: 'calc(33vw/1.5)'        
    }
}   

function Tri (props) {
    if(props.up){
        return <div style={styles.UpTri} />
    } 
    return <div style={styles.DownTri} />

}

export default Tri;