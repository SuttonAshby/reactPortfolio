import React from 'react';
import background from '../images/texture-bg.jpg';
import Landing from '../components/Landing.js';
import About from '../components/About.js';
import SelectedWorks from '../components/SelectedWorks';



const styles = {
    root: {
        flexGrow: 1,
    },
    home: {
        backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
    }
}

function Home(props) {
    const { classes } = props;

    return (
        <div style={styles.home}>
            <Landing />
            <SelectedWorks />
            <About />    
        </div>
    )
}

export default Home;