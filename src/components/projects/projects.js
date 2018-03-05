import React, { Component } from 'react';
import './projects.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Projects extends Component {

    render() {

        return(
            <div>
                <ScrollableAnchor id={'projects'}>
                <div className="projectContainer">
                    
                </div>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default Projects;