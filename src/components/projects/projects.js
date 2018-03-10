import React, { Component } from 'react';
import './projects.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Projects extends Component {
    
        constructor(props) {
        super(props);
        this.state= {
            featuresClosed: false,
            clonesClosed: false,
            appsClosed: false,
        }

        this.closeFeatures = this.closeFeatures.bind(this);
        this.openClones = this.openClones.bind(this);
        this.openApps = this.openApps.bind(this);
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

    render() {

        return(
        
            <div>
                <ScrollableAnchor id={'projects'}><div></div></ScrollableAnchor>
                    <div className="projectContainer">
                <div className="projectsTitle">Projects</div>
                        <div className="workMenuParent">   
                            <div id="features"onClick={this.closeFeatures}>Featured Websites</div>
                            <div id="features" onClick={this.openApps}>Applications</div>
                            <div id="features" onClick={this.openClones}>Website Clones</div>
                        </div>

                        <div className="allParent">
                            <div className={this.state.featuresClosed ? 'close features' : 'features'}>
                                <div className="featuresParent">
                                    <div className="websites">Wolf Creek</div>
                                    <div className="websites">Restore</div>
                                    <div className="websites">Page Consulting</div>
                                </div>
                            </div>
                            <div className={this.state.appsClosed ? 'close apps' : 'apps'}>
                                <div className="featuresParent">
                                    <div className="websites">Weather App</div>
                                    <div className="websites">ToDo App</div>
                                    <div className="websites">No Database App</div>
                                </div>
                            </div>
                            <div className={this.state.clonesClosed ? 'close clones' : 'clones'}>
                                <div className="featuresParent">
                                    <div className="websites">Big Marlin Clone</div>
                                    <div className="websites">Rocket Media Clone</div>
                                </div>
                            </div>
                        </div>
                    
                </div> 
            </div>
            
        )
    }
}

export default Projects;