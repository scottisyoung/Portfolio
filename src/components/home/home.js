import React, { Component } from 'react';
import './home.css';
import video from '../../images-video/mist.mp4';
import ScrollableAnchor from 'react-scrollable-anchor';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="bg">
                    <div className="parent">
                        <ScrollableAnchor id={'home'}>
                            <video id="myVideo" loop muted preload="auto" autoPlay>
                                <source src ={video} type="video/mp4"/>
                            </video>
                        </ScrollableAnchor>

                        <div className="parent2">
                            <div className="name">SCOTT YOUNG<span className="dot">.</span></div>

                            <div className="boxedParent">    
                                <div className="boxed1">
                                    <div>
                                        <ul className="title hidden">
                                            <li>W</li> 
                                            <li>e</li> 
                                            <li>b</li> 
                                        </ul>
                                    </div>
                                </div>

                                <div className="boxed2">
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
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="downParent">
                            <div className="down">
                                <a className="linkdown" href="#about">   
                                    <div className="arrowDown">
                                        <i className="fa fa-chevron-down"></i>
                                    </div>
                                </a>
                            </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Home;