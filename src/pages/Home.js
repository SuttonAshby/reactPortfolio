import React from 'react';
import background from '../images/texture-bg.jpg';
import Landing from '../components/Landing.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import SelectedWorks from '../components/SelectedWorks';
import Navbar from '../components/Navbar';
import Scrollable from '../components/Scrollable.js';



const styles = {
    root: {
        flexGrow: 1,
    },
    home: {
        backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
    },
    offset:{
        marginTop: "100vh",
        // backgroundImage: `url(${background})`,
        // background: "red",
        // backgroundSize: "cover"
        // minHeight: "200vh",
        // width: "100vw",
        // maxWidth: "100%"
    
    }

}

//notes: separate landing component from all other page components

function Home(props) {
    const { classes } = props;

    return (
        <div 
            // style={styles.home}
        >
            <Landing />
            <div style={styles.offset} />
                <Scrollable />
            {/* <Navbar />
            <SelectedWorks />
            <About />
            <Contact />   */}
            {/* </div> */}
  
        </div>
    )
}

export default Home;