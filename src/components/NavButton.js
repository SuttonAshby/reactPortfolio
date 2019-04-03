import React from 'react';
import navHome from '../images/navSquareHome.png';
import navAbout from '../images/navSquareAbout.png';
import navContact from '../images/navSquareContact.png';
import navWorks from '../images/navSquareWorks.png';


const styles = {
    imageContainer: {
        height: 100,
        width: 100,
        marginRight: 25,
        position: "relative",
        // right: 0,
        // top: 0
    },
    home: {
        clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
        backgroundImage:  `url(${navHome})`,
        width: 50,
        height: 50,
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        left: 0,    
    },
    works: {
        clipPath: "polygon(0 0, 0% 100%, 100% 100%)",
        backgroundImage:  `url(${navWorks})`,
        width: 50,
        height: 50,
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        right: 0, 
    },
    about: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%)",
        backgroundImage:  `url(${navAbout})`,
        width: 50,
        height: 50,
        backgroundSize: "cover",
        position: "absolute",
        bottom: 0,
        left: 0,    
    },
    contact: {
        clipPath: "polygon(0 0, 100% 0, 0 100%)",
        backgroundImage:  `url(${navContact})`,
        width: 50,
        height: 50,
        backgroundSize: "cover",
        position: "absolute",
        bottom: 0,
        right: 0,    
    },
}

function NavButton(props){

    return(
        <div style={styles.imageContainer}>
            <div style={styles.home} />
            <div style={styles.works} />
            <div style={styles.about} />
            <div style={styles.contact} />
        </div>
    )


}

export default NavButton;