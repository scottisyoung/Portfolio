import React, { Component } from 'react';
import './contact.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Contact extends Component {

    render() {
        return(
            <div>
                <div>
                    <ScrollableAnchor id={'contact'}>
                        <div className="contactContainer">
                            <div className="contactParent">
                                <div className="contactTitle">Contact Me</div>
                                
                                        <div className="contactBox">
                                                <div className="contactDetails" id="cd">
                                                    <div className="myName">Scott Young<span className="smallDot">.</span></div>
                                                    <div className="myTitle">Web <span className="dev">Developer</span></div>
                                                    <hr/>
                                                    <div className="myEmail" id="cd2"><a id="cd2" href="mailto:scott.t.young1@gmail.com?subject=Contact from Portfolio" target="_blank" rel="noopener noreferrer"><span id="cd1">Email:</span> &emsp; scott.t.young1@gmail.com</a></div>
                                                    <div className="myPhone" id="cd2"><span id="cd1">Phone:</span> &emsp;(602) 872-1677</div>
                                                    <hr/>
                                                    <a href="https://github.com/scottisyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-github-square"></i></a>
                                                    <a href="https://www.linkedin.com/in/scottyoung5/" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-linkedin-square"></i></a>
                                                    <a href="https://www.instagram.com/scottieboyyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-instagram"></i></a>
                                                    <a href="https://www.facebook.com/scottisyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-facebook-square"></i></a>
                                                </div>

                                                <form action="mailto:scott.t.young1@gmail.com?subject=Contact from Portfolio" method="post" encType="text/plain">
                                                    <div className="input1">
                                                        <input name="name" type="text" placeholder="Full Name" required></input>
                                                    </div>
                                                    <div className="input2">
                                                        <input name="mail" type="text" placeholder="Email Address" required></input>
                                                    </div>
                                                    <div className="input3">
                                                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                                                    </div>
                                                    <div className="sendParent">
                                                        <input id="sending" type="submit" value="send"></input>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                    
            
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default Contact;