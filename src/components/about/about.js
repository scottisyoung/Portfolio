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
                                    <div className="paragraphs"><a className="linky" href="#about">
                                                                I have always had a passion for technology. I am facinated<br/> 
                                                                with how things function and the ingenuity that goes into <br/>
                                                                those designs. Along with this facination towards tech, I <br/> 
                                                                was fortunate to given a very creative mind. I love being <br/>
                                                                artistic and utilizing my creativity in a variety of ways.<br/> 
                                                                However, I use to see these aspirations as simply hobbies.<br/> 
                                                                Because of this, I tried many jobs and a variety of career<br/> 
                                                                paths but none would satisfy my desires to learn and apply<br/> 
                                                                myself in the ways that I craved. It wasn't until I began <br/>
                                                                coding that I realized I had found a truely fulfilling career.</a>
                                    </div>

                                    <div className="paragraphs"><a className="linky" href="#about">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore <br/> 
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> 
                                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/> 
                                                                consequat. Duis aute irure dolor in reprehenderit in <br/> 
                                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> 
                                                                Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                                                                culpa qui officia deserunt mollit anim id est laborum."</a>
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
                                    <div className="paragraphs2"><a className="linky" href="#about">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore <br/> 
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> 
                                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/> 
                                                                consequat. Duis aute irure dolor in reprehenderit in <br/> 
                                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> 
                                                                Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                                                                culpa qui officia deserunt mollit anim id est laborum."</a>
                                    </div>

                                    <div className="paragraphs2"><a className="linky" href="#about">
                                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                                                                sed do eiusmod tempor incididunt ut labore et dolore <br/> 
                                                                magna aliqua. Ut enim ad minim veniam, quis nostrud <br/> 
                                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/> 
                                                                consequat. Duis aute irure dolor in reprehenderit in <br/> 
                                                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> 
                                                                Excepteur sint occaecat cupidatat non proident, sunt in <br/>
                                                                culpa qui officia deserunt mollit anim id est laborum."</a>
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