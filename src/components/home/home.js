import React, { Component } from 'react';
import './home.css';
import video from '../../images-video/mist.mp4';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="bg">
                    <div className="videoDiv">
                        <video id="myVideo" loop muted preload="auto" autoPlay>
                            <source src ={video} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="name">SCOTT YOUNG <span className="dot">.</span></div>
                    
                    <div>
                        <ul className="title hidden">
                            <li>W</li>
                            <li>e</li>
                            <li>b</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="fly-in-text hidden">
                            <li>D</li>
                            <li>e</li>
                            <li>v</li>
                            <li>e</li>
                            <li>l</li>
                            <li>o</li>
                            <li>p</li>
                            <li>e</li>
                            <li>r</li>
                        </ul>
                    </div>

                        <div className="arrowDown">
                            <a href="#about">
                            <div><i className="fa fa-chevron-down"></i></div>
                            </a>
                        </div>

                </div>
            </div>
        )
    }
}

export default Home;