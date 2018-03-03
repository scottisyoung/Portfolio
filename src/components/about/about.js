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
                                    <div className="subtitles">WHY DEVELOPMENT?</div>
                                    <div className="subtitles">BACKGROUND</div>
                                </div>

                                <div className="amParent">
                                    <div className="paragraphs"><a className="linky" href="#about">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna <br/>  
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
                                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
                                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit <br/>
                                                                anim id est laborum."</a>
                                    </div>

                                    <div className="paragraphs"><a className="linky" href="#about">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna <br/>  
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
                                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
                                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit <br/>
                                                                anim id est laborum."</a>
                                    </div>
                                </div>

                                <div className="myPicture">
                                    <img className="photo" src={picture}/>
                                </div>

                                <div className="amParent">
                                <div className="subtitles2">Hobbies</div>
                                <div className="subtitles2">Links</div>
                            </div>

                                <div className="amParent">
                                    <div className="paragraphs2"><a className="linky" href="#about">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna <br/>  
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
                                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
                                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit <br/>
                                                                anim id est laborum."</a>
                                    </div>

                                    <div className="paragraphs2"><a className="linky" href="#about">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna <br/>  
                                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/>
                                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/>
                                                                cupidatat non proident, sunt in culpa qui officia deserunt mollit <br/>
                                                                anim id est laborum."</a>
                                    </div>
                                </div>

                        </div>
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default About;