import React, {Component} from 'react';
import './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div>
                <div className="navbar">
                    <div id="home" className="directory"><a id="home" className="linkDown" href="#homme">Home</a></div>
                    <div className="directory"><a className="linkDown" href="#about">About Me</a></div>
                    <div className="directory"><a className="linkDown" href="#projects">Projects</a></div>
                    <div className="directory"><a className="linkDown" href="#skills">Skills</a></div>
                    <div className="directory"><a className="linkDown" href="#contact">Contact</a></div>
                </div>
            </div>
        )
    }
}

export default Navbar;
