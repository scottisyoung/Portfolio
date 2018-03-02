import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="navbar">
                    <div id="home" className="directory">Home</div>
                    <div className="directory">About Me</div>
                    <div className="directory">Projects</div>
                    <div className="directory">Skills</div>
                    <div className="directory">Contact</div>
                </div>
            </div>
        )
    }
}

export default Navbar;
