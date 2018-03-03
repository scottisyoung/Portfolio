import React, {Component} from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.css';
import picture from '../../images-video/ScottYoung.jpg';


class About extends Component {
    render() {
        return(
            <div>
                <div className="container">
                    <ScrollableAnchor id={'about'}>
                        <div className="aboutMe">

                            <div className="amTitle">About Me</div>
                            <div className="amParent">
                                <div className="subtitles"><a className="linky" href="#about">WHY DEVELOPMENT?</a></div>
                                <div className="subtitles"><a className="linky" href="#about">BACKGROUND</a></div>

                            </div>
                            <div className="myPicture">
                                <img className="photo" src={picture}/>
                            </div>
                        </div>
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default About;