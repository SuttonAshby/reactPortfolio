import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: this.props.current,
      blurb: this.props.blurb,
      styles: {
        root: {
          flexGrow: 1,
          position: "-webkit-sticky",
          position: "sticky",
          top: "0",
          zIndex: "1200",      
        },
        navbar: {
          background: "rgba(255,255,255,.4)",
        }
      }
    }
    // this.navRef = React.createRef();
  }

  componentWillReceiveProps(nextProps){
    this.setState({current: nextProps.current})
    this.setState({blurb: nextProps.blurb})
  }

  render(){
    return (
      <div 
        style={this.state.styles.root}
        // ref={this.navRef}
         >
        <AppBar position="sticky" style={this.state.styles.navbar}>
          <Toolbar>
            <Typography variant="h6" >
              {this.state.current}
            </Typography>
            <Typography>
              {this.state.blurb}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Navbar);
export default Navbar;