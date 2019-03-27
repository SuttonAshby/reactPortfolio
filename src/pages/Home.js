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
        this.scrollRef = React.createRef();
    }

    scrollToRef = () => {
        console.log(this.scrollRef.current.offsetTop)
        window.scrollTo(0,this.scrollRef.current.offsetTop);
    }


    render(){
        return (
            <div>
                <Button
                    onClick={()=>{
                        console.log("clicked")
                        this.scrollRef.current.scrollIntoView({behavior: 'smooth'})
                        // window.scrollBy(0, 64)
                    }}
                    // onClick={this.scrollToRef}
                    >TEST CLICK</Button>
                {/* <Landing /> */}
                <div style={styles.offset} >
                    {/* <Scrollable /> */}
                    <Navbar />
                    <SelectedWorks scrollRef={this.scrollRef}/>
                    <About />
                    <Contact />  
                </div>
                </div>
        )
    }
}

export default Home;