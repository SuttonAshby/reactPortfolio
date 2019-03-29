import React from 'react';
import background from '../images/texture-bg.jpg';
import Landing from '../components/Landing.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import SelectedWorks from '../components/SelectedWorks';
import Navbar from '../components/Navbar';
import Scrollable from '../components/Scrollable.js';

//for testing
import Button from '@material-ui/core/Button';



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
        backgroundImage: `url(${background})`,
        // background: "red",
        // backgroundSize: "cover"
        minHeight: "300vh",
        width: "100vw",
        maxWidth: "100%",
        position: "relative"    
    }

}

//notes: separate landing component from all other page components

class Home extends React.Component {
    constructor(props){
        super(props);
        this.worksRef = React.createRef();
        this.aboutRef = React.createRef();
        this.contactRef = React.createRef();
    }

    scrollToWorks = () => {
        this.worksRef.current.scrollIntoView({behavior: 'smooth'})
    }
    scrollToAbout = () => {
        this.aboutRef.current.scrollIntoView({behavior: 'smooth'})
    }
    scrollToContact = () => {
        this.contactRef.current.scrollIntoView({behavior: 'smooth'})
    }


    render(){
        return (
            <div>
                {/* <Button
                    onClick={this.scrollToRef}
                    >TEST CLICK</Button> */}
                <Landing 
                    scrollToWorks={this.scrollToWorks}
                    scrollToAbout={this.scrollToAbout}
                    scrollToContact={this.scrollToContact}/>
                <div style={styles.offset} >
                    {/* <Scrollable /> */}
                    <Navbar />
                    <SelectedWorks scrollRef={this.worksRef}/>
                    <About scrollRef={this.aboutRef}/>
                    <Contact scrollRef={this.contactRef}/>  
                </div>
                </div>
        )
    }
}

export default Home;