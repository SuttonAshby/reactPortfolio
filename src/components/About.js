import React from 'react';


const styles = {
    root: {
        flexGrow: 1,
    },
    about: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%"

    }
}

function About(props) {
    const { classes } = props;

    return (
        <div style={styles.about}>
            
        </div>
    )
}

export default About;