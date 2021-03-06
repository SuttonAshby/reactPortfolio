import React from 'react';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        flexGrow: 1,
    },
    contact: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%"

    }
}

function Contact(props) {
    const { classes } = props;

    return (
        <div style={styles.contact} ref={props.scrollRef}>
                
        </div>
    )
}

export default Contact;