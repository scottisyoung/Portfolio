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
                                    <div className="paragraphs" id="realizedP">
                                        <a className="linky" href="#about">
                                            I have always had a passion for technology. I am facinated<br/> 
                                            with how things function and the ingenuity that goes into <br/>
                                            those designs. Along with this facination towards tech, I <br/> 
                                            was fortunate to be given a very creative mind. I love being <br/>
                                            artistic and utilizing my creativity in a variety of ways.<br/> 
                                            However, I use to see these aspirations as simply hobbies.<br/> 
                                            Because of this, I tried many jobs and a variety of career<br/> 
                                            paths but none would satisfy my desires to learn and apply<br/> 
                                            myself in the ways that I craved. It wasn't until I began <br/>
                                            coding that I <span id="realized">realized</span> I had found a truely fulfilling career.                    
                                        </a>
                                    </div>

                                    <div className="paragraphs" id="background">
                                        <a className="linky" href="#about">
                                            {/* I grew up in Farmington, NM and spent many of my <br/>
                                            weekends in Sounthern Colorado outdoors. When I was 19, <br/>
                                            I served a 2 year mission for my church in Antofagasta, <br/>
                                            Chile. After the mission I recieved a BS degree in Biology <br/> 
                                            from Arizona State University. While initally persuing a <br/> 
                                            career in Dentisty, I found a career in medical sales instead. <br/>  
                                            I began to dabble in code for fun and I learned how much it <br/> 
                                            fits my personality. I then left sales to attend DevMountain <br/> 
                                            for an intense 12-week development program. The program <br/> 
                                            focused on a full-stack of React, JS, Node and Postgres.<br/> */}
                                            
                                            <div className="lParent2"><div id="span3">Web Developer</div><div className="description2">Full-Stack Web Developer trained in multiple frameworks<br/></div></div>
                                                                                                                                       
                                            <div className="lParent2"><div id="span3">DevMountain</div><div className="description2">12-week intense development program focused on modern <br/>
                                                                                                                                      technologies and full-stack applications.</div></div>
                                            <div className="lParent2"><div id="span3">Arizona State University</div><div className="description2">Bachelors of Science Degree in Applied Biological Science</div></div>
                                            <div className="lParent2"><div id="span3">Professional</div><div className="description2">Positions of leadership, management, and training management. <br/>
                                                                                                                                      Sales, presentations and customer relationship experience. </div></div>
                                        </a>
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
                                    <div className="paragraphs2" id="span1">
                                        <a className="linky" href="#about">
                                                In addition to technology, I enjoy a variety of hobbies<br/> 
                                                A few of my favorites are...<br/> 
                                            <ul>
                                                <li><div className="lParent"><div id="span2">Traveling:</div><div className="description">Excited by culture and visited 23 countries</div></div></li>
                                                <li><div className="lParent"><div id="span2">Languages:</div><div className="description">Fluent Spanish and currently learning <br/>
                                                                                                                                            Norwegian and Italian</div></div></li>
                                                <li><div className="lParent"><div id="span2">Outdoors:</div><div className="description">Camping, hiking and rock climbing</div></div></li>
                                                <li><div className="lParent"><div id="span2">Sports:</div><div className="description">Soccer, football, skiing, muay thai and golf </div></div></li>
                                                <li><div className="lParent"><div id="span2">Fitness:</div><div className="description">Weight lifting, running and swimming</div></div></li>
                                                <li><div className="lParent"><div id="span2">Arts:</div><div className="description">Guitar, painting, videography and photography</div></div></li>
                                            </ul> 
                                        </a>
                                    </div>

                                    <div className="paragraphs2" id="sizeDiv">
                                        <div className="linky">
                                            <div className="linksParent">
                                                <div className="iconsParent">
                                                    <div className="iconsF"><a href="https://github.com/scottisyoung"target="_blank"><div className="iSize"><i id="iconsF" className="fa fa-github-square"></i></div></a></div>
                                                    <div className="iconsF"><a href="https://www.linkedin.com/in/scottyoung5/"target="_blank"><div className="iSize"><i id="iconsF" className="fa fa-linkedin-square"></i></div></a></div>
                                                    <div className="iconsF"><a href="https://www.instagram.com/scottieboyyoung"target="_blank"><div className="iSize"><i id="iconsF" className="fa fa-instagram"></i></div></a></div>
                                                    <div className="iconsF"><a href="https://www.facebook.com/scottisyoung"target="_blank"><div className="iSize"><i id="iconsF" className="fa fa-facebook-square"></i></div></a></div>
                                                </div>
                                                <div className="otherParent">
                                                    <div className="other"><a href="https://drive.google.com/open?id=1U08AegwTrn-pF3F7ckrUqqe8QDcL1HvU"target="_blank"><div className="Size" id="size"><span>Resume</span></div></a></div>
                                                </div>
                                            </div>
                                        </div>
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