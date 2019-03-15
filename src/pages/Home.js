import React from 'react';
import background from '../images/texture-bg.jpg';
import Landing from '../components/Landing.js';
import About from '../components/About.js';
import SelectedWorks from '../components/SelectedWorks';
import Navbar from '../components/Navbar';



const styles = {
    root: {
        flexGrow: 1,
    },
    home: {
        backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
    }
}

//notes: separate landing component from all other page components

function Home(props) {
    const { classes } = props;

    return (
        <div style={styles.home}>
            <Landing />
            <div>
            <Navbar />
            <SelectedWorks />
            <About />  
                </div>
  
        </div>
    )
}

export default Home;