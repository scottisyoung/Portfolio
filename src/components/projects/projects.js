import React, { Component } from 'react';
import './projects.css';
import ScrollableAnchor from 'react-scrollable-anchor';

import wolfCreek from '../../images-video/project-snippits/WolfCreek.png';
import pageConsulting from '../../images-video/project-snippits/PageConsulting2.png';
import restore from '../../images-video/project-snippits/Restore.png';
import amalfi from '../../images-video/project-snippits/Amalfi.PNG';
import weather from '../../images-video/project-snippits/Weather App.PNG';
import todo from '../../images-video/project-snippits/To-Do.PNG';
import myAway from '../../images-video/project-snippits/myAway.png';
import rocketMedia from '../../images-video/project-snippits/RocketMedia.PNG';
import bigMarlin from '../../images-video/project-snippits/BigMarlin.PNG';


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
                                            <a href="https://wolf-creek-website.now.sh" target="_blank"><div className="liveSite">Website</div></a>
                                            <a href="#projects" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                            <a href="https://github.com/scottisyoung/Wolf-Creek" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | SASS | ES6 | Redux | HTML5 | NodeJS | 
                                                                       ExpressJS | Massive | PostgresSQL | Stripe | Git | Auth0                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={pageConsulting} alt="Restore Website"/>
                                        <div className="overlay">
                                                <div className="titleOverlay">Page Consulting Website</div>
                                                <div className="subOverlay">Freelance Work</div>
                                                <div className="desOverlay">Currently in Progress</div>
                                                <a href="#projects" target="_blank"><div className="liveSite">Website</div></a>
                                                <a href="#projects" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                                <a href="https://github.com/scottisyoung/Page-Consulting" target="_blank"><div className="gitHubLink">Github</div></a>
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={restore} alt="Restore Website"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Restore Website</div>
                                            <div className="subOverlay">Group Project</div>
                                            <div className="desOverlay">2 Week Project with 3 Member Team</div>
                                            <a href="http://104.236.131.87:3300/#/" target="_blank"><div className="liveSite">Website</div></a>
                                            <a href="#projects" target="_blank"><div className="videoWalk">Video Walkthrough</div></a>
                                            <a href="https://github.com/scottisyoung/goodhabit" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | SASS | ES6 | Redux | HTML5 | NodeJS | 
                                                                       ExpressJS | Massive | PostgresSQL | ParticleJS | Git | Auth0                        
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="websites">
                                        <img className="proSnips" src={amalfi} alt="Amalfi Website"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Amalfi Website</div>
                                            <div className="subOverlay">Freelance Work</div>
                                            <div className="desOverlay">1st Website / Free Volunteer Work for Restaurant</div>
                                            <a href="http://www.amalfipizzaaz.com/" target="_blank"><div className="liveSite">Website</div></a>
                                            <div className="libraries"> HTML5 | CSS3                                           
                                            </div> 
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={this.state.appsClosed ? 'close apps' : 'apps animated slideInUp'}>
                                <div className="featuresParent">
                                    <div className="websites">
                                    <img className="proSnips" src={weather} alt="Weather App"/>
                                        <div className="overlay">
                                        <div className="titleOverlay">Weather Application</div>
                                            <div className="subOverlay"></div>
                                            <div className="desOverlay"></div>
                                            <a href="#projects" target="_blank"><div className="liveSite">Application</div></a>
                                            <a href="#projects" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | HTML5 | CSS3 | ES6 | Git | Bootstrap                    
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={todo} alt="Todo App"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">To-Do Application</div>
                                            <div className="subOverlay">2 Hour Project</div>
                                            <div className="desOverlay">Front-End Only Basic App</div>
                                            <a href="http://fortunate-stove.surge.sh/" target="_blank"><div className="liveSite">Application</div></a>
                                            <a href="https://github.com/scottisyoung/ToDo-App" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | HTML5 | CSS3 | ES6 | Git                     
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={myAway} alt="My Away App"/>
                                        <div className="overlay">
                                        <div className="titleOverlay">myAway Application</div>
                                            <div className="subOverlay">1 Day Project</div>
                                            <div className="desOverlay">No Database Application</div>
                                            <a href="http://disturbed-berry.surge.sh" target="_blank"><div className="liveSite">Application</div></a>
                                            <a href="https://github.com/scottisyoung/myAway" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | HTML5 | CSS3 | ES6 | Git | Bootstrap | ExpressJS                    
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.clonesClosed ? 'close clones' : 'clones animated slideInRight'}>
                                <div className="featuresParent">
                                    <div className="websites">
                                        <img className="proSnips" src={bigMarlin} alt="Big Marlin Clone"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Big Marlin Website Clone</div>
                                            <div className="subOverlay">2 Day Project</div>
                                            <div className="desOverlay">Official Website: https://bigmarlin.group</div>
                                            <a href="http://sticky-kick.surge.sh/" target="_blank"><div className="liveSite">Website Clone</div></a>
                                            <a href="https://github.com/scottisyoung/Big-Marlin-Group-Clone" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | HTML5 | CSS3 | ES6 | Git                                            
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="websites">
                                        <img className="proSnips" src={rocketMedia} alt="Rocket Media Clone"/>
                                        <div className="overlay">
                                            <div className="titleOverlay">Rocket Media Website Clone</div>
                                            <div className="subOverlay">2 Day Project</div>
                                            <div className="desOverlay">Official Website: https://www.rocketmedia.com</div>
                                            <a href="http://friendly-drop.surge.sh/#/" target="_blank"><div className="liveSite">Website Clone</div></a>
                                            <a href="https://github.com/scottisyoung/Rocket-Media-Clone" target="_blank"><div className="gitHubLink">Github</div></a>
                                            <div className="libraries">ReactJS | HTML5 | CSS3 | ES6 | Git                     
                                            </div> 
                                        </div>
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