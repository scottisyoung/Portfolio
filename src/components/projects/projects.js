import React, { Component } from 'react';
import './projects.css';
import ScrollableAnchor from 'react-scrollable-anchor';

import wolfCreek from '../../images-video/project-snippits/WolfCreek.png';
import restore from '../../images-video/project-snippits/Restore.png';
import todo from '../../images-video/project-snippits/ToDo.png';
import myAway from '../../images-video/project-snippits/myAway.png';
import rocketMedia from '../../images-video/project-snippits/RocketMedia.PNG';
import bigMarlin from '../../images-video/project-snippits/BigMarlin.PNG';
import pageConsulting from '../../images-video/project-snippits/PageConsulting2.png';

class Projects extends Component {
    
        constructor(props) {
        super(props);
        this.state= {
            featuresClosed: false,
            clonesClosed: false,
            appsClosed: false,
            color_green: true,
            colorGreen: true,
            ColorGreen: true,
        }

        this.closeFeatures = this.closeFeatures.bind(this);
        this.openClones = this.openClones.bind(this);
        this.openApps = this.openApps.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeColor2 = this.changeColor2.bind(this);
        this.changeColor3 = this.changeColor3.bind(this);
    }

    closeFeatures() {
        this.setState({
            featuresClosed: !this.state.featuresClosed
        })
    }

    openClones() {
        this.setState({
            clonesClosed: !this.state.clonesClosed
        })
    }

    openApps() {
        this.setState({
            appsClosed: !this.state.appsClosed
        })
    }

    changeColor() {
        this.setState({
            color_green: !this.state.color_green,
        })
    }

    changeColor2() {
        this.setState({
            colorGreen: !this.state.colorGreen,
        })
    }

    changeColor3() {
        this.setState({
            ColorGreen: !this.state.ColorGreen,
        })
    }

    render() {

            let myColor = this.state.color_green ? "white" : "black";
            let myColor2 = this.state.colorGreen ? "white" : "black";
            let myColor3 = this.state.ColorGreen ? "white" : "black";

        return(
        
            <div>
                <ScrollableAnchor id={'projects'}><div></div></ScrollableAnchor>
                    <div className="projectContainer">
                <div className="projectsTitle">Projects</div>
                        <div className="workMenuParent">   
                            <div id="features" 
                                 style={{fontFamily: 'Julius Sans One', color: myColor}} 
                                 onClick={(e) => {this.closeFeatures() ; this.changeColor();}}>Featured Websites 
                            </div>
                            <div id="features" 
                                 style={{fontFamily: 'Julius Sans One', color: myColor2}} 
                                 onClick={(e) =>{this.openApps() ; this.changeColor2();}}>Applications
                            </div>
                            <div id="features" 
                                 style={{fontFamily: 'Julius Sans One', color: myColor3}} 
                                 onClick={(e) =>{this.openClones() ; this.changeColor3();}}>Website Clones
                            </div>
                        </div>

                        <div className="allParent">
                            <div className={this.state.featuresClosed ? 'close features' : 'features animated slideInLeft'}>
                                <div className="featuresParent">
                                    <div className="websites">
                                        <img className="proSnips" src={wolfCreek} alt="Wolf Creek Website"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Wolf Creek Website</div>
                                            <div className="subOverlay">Personal Project</div>
                                            <div className="desOverlay">Awarded <span>"Best Overall Project"</span> <br/>by DevMountain</div>
                                            <a href="#" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                            <a href="https://github.com/scottisyoung/Wolf-Creek" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | SASS | ES6 | Redux | HTML5 | NodeJS | 
                                                                       ExpressJS | Massive | PostgresSQL | Stripe | Git | Auth0 | 
                                                                       
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={pageConsulting} alt="Restore Website"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Page Consulting Website</div>
                                                <div className="subOverlay">Freelance Work</div>
                                                <div className="desOverlay">Currently in Progress</div>
                                                <a href="#" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                                <a href="https://github.com/scottisyoung/Page-Consulting" target="_blank"><div className="gitHubLink">Github</div></a>
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={restore} alt="Restore Website"/>
                                        <div className="overlay">
                                        <div className="titleOverlay">Restore Website</div>
                                            <div className="subOverlay">Group Project</div>
                                            <div className="desOverlay">2 Week Project with 3 Member Team</div>
                                            <a href="#" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                            <a href="https://github.com/scottisyoung/goodhabit" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | SASS | ES6 | Redux | HTML5 | NodeJS | 
                                                                       ExpressJS | Massive | PostgresSQL | ParticleJS | Git | Auth0 |                       
                                            </div> 
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={this.state.appsClosed ? 'close apps' : 'apps animated slideInUp'}>
                                <div className="featuresParent">
                                    <div className="websites">Weather App
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={todo} alt="Todo App"/>
                                        <div className="overlay"></div>
                                        </div>
                                    <div className="websites">
                                        <img className="proSnips" src={myAway} alt="My Away App"/>
                                        <div className="overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.clonesClosed ? 'close clones' : 'clones animated slideInRight'}>
                                <div className="featuresParent">
                                    <div className="websites">
                                        <img className="proSnips" src={bigMarlin} alt="Big Marlin Clone"/>
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={rocketMedia} alt="Rocket Media Clone"/>
                                        <div className="overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div> 
            </div>
            
        )
    }
}

export default Projects;