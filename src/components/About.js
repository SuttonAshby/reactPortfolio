import React from 'react';
import Typography from '@material-ui/core/Typography';




const styles = {
    root: {
        flexGrow: 1,
    },
    about: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%"
    },
    text: {
        padding: "10%"
    }
}

function About(props) {
    const { classes } = props;

    return (
        <div style={styles.about} ref={props.scrollRef}>
            <div style={styles.text}>
                <Typography
                    variant="h6"
                    paragraph="true">
                    Lifelong learner always interested in learning new technologies 
                    and skills or honing old ones. Strong interest in Game Design and 
                    bringing Game Design principles and concepts into other fields. 
                    Looking for a full-time full-stack web development position. 
                    Works best in small flexible goal-oriented team with cross-disciplinary 
                    needs and expectations.
                </Typography>
                <Typography
                    variant="h6"
                    paragraph="true">
                    Experience with holistic design of small web applications 
                    using MERN stack as well as mobile components with React 
                    Native. With a background as an educator, I am accustomed to 
                    conveying information to people with differing levels of 
                    understanding, and communicating clearly.
                </Typography>      
            </div>
             
        </div>
    )
}

export default About;