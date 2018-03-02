import React, {Component} from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.css';


class About extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <ScrollableAnchor id={'about'}>
                        <div className="aboutMe">
                            <div className="myPicture"></div>
                        </div>
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default About;