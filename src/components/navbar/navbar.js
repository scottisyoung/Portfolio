import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="navbar">
                    <div id="home" className="directory"><a id="home" className="linkDown" href="#home">Home</a></div>
                    <div className="directory"><a className="linkDown" href="#about">About Me</a></div>
                    <div className="directory">Projects</div>
                    <div className="directory">Skills</div>
                    <div className="directory">Contact</div>
                </div>
            </div>
        )
    }
}

export default Navbar;
