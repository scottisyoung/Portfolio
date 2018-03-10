import React, { Component } from 'react';
import './projects.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Projects extends Component {
    
        constructor() {
        super();
        this.state= {
            
        }
    }
      
    
    render() {

        return(
        
            <div>
                <ScrollableAnchor id={'projects'}><div></div></ScrollableAnchor>
                    <div className="projectContainer">
                <div className="projectsTitle">Projects</div>
                        <div className="featuresParent">
                            <div className="features">All Projects</div>
                            <div className="features">Featured Websites</div>
                             <div className="features">Website Clones</div>
                            <div className="features">Applications</div>
                        </div>

                        <div className="displayArea">
                        </div>
                    
                </div> 
            </div>
            
        )
    }
}

export default Projects;