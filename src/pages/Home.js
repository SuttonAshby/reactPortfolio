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
        this.state = {
            worksHeight: 0,
            currentNav: "Portfolio",
            blurb: "Click on the code to go to the repository, Click on the site to go there (if there should be one)."
        }

        this.handleNavbar = this.handleNavbar.bind(this)

        this.worksRef = React.createRef();
        this.aboutRef = React.createRef();
        this.contactRef = React.createRef();

        this.testRef = React.createRef();
    }

    componentDidMount() {
        this.setState({workHeight: this.testRef.innerHeight})

        window.addEventListener('scroll', this.handleNavbar);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNavbar)
      }

    componentDidUpdate(){
        // this.setState({workHeight: this.testRef.innerHeight})
    }

    getWorksHeight = (height) => {
        // console.log("callback from home:" + testValue)
        this.setState({worksHeight: height})
    }
    
    handleNavbar = () =>{
        if(window.pageYOffset > (window.innerHeight + this.state.worksHeight) && window.pageYOffset < ((2 * window.innerHeight) + this.state.worksHeight)) {
            this.setState({currentNav: "About"})
            this.setState({blurb: "Full Stack Web Developer based out of Philadelphia, PA."})
        } else if(window.pageYOffset > ((2 * window.innerHeight) + this.state.worksHeight)){
            this.setState({currentNav: "Contact"})
            this.setState({blurb: "Contact me through GitHub, LinkedIn, or StackOverflow."})
        } else {
            this.setState({currentNav: "Portfolio"})
            this.setState({blurb: "Click on the code to go to the repository, Click on the site to go there (if there should be one)."})
        }
        // console.log(`offset: ${window.pageYOffset}, window + works ${window.innerHeight + this.state.worksHeight}`)

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
                    <Navbar 
                        current={this.state.currentNav}
                        blurb={this.state.blurb}/>
                    <SelectedWorks 
                        scrollRef={this.worksRef} 
                        ref={this.testRef}
                        heightCallback={this.getWorksHeight}/>
                    <About scrollRef={this.aboutRef}/>
                    <Contact scrollRef={this.contactRef}/>  
                </div>
            </div>
        )
    }
}

export default Home;