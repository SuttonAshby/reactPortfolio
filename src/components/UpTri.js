import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const styles = {
    UpTri:{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        background: "rgba(255,255,255,1)",
        width: '33vw',
        height: 'calc(33vw/1.5)'    }
}   

function UpTri (props) {

return(
    <div style={styles.UpTri}>

    </div>
)

}

export default UpTri;