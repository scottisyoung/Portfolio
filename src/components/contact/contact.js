import React, { Component } from 'react';
import './contact.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import axios from 'axios';

class Contact extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            email: '',
            business: '',
            message: '',

            thankYouGiven: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.thankYou = this.thankYou.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        e.target.reset();

        const {name, email, business, message} = this.state
        
        const form = await axios.post('/api/form', {
           name, 
           email,
           business,
           message 
        })
    }

        reset() {
            document.getElementById("email").setAttribute("disabled", this.state.email);
            document.getElementById("message").setAttribute("disabled", this.state.message);

            this.setState({
                thankYouGiven: false,
                name: '',
                email: '',
                business: '',
                message: ''
            })
        }

        thankYou() {
        this.setState({
            thankYouGiven: !this.state.thankYouGiven
        })

        setTimeout(this.reset,4000)
    }

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
                                                    <div className="myEmail" id="cd2">
                                                         <a id="cd2" 
                                                            href="mailto:scott.t.young1@gmail.com?subject=Contact from Portfolio" 
                                                            target="_blank" rel="noopener noreferrer">
                                                            <span id="cd1">Email:</span>&emsp; scott.t.young1@gmail.com
                                                        </a>
                                                    </div>
                                                    <div className="myPhone" id="cd2"><span id="cd1">Phone:</span> &emsp;(602) 872-1677</div>
                                                    <hr/>
                                                    <a href="https://github.com/scottisyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-github-square"></i></a>
                                                    <a href="https://www.linkedin.com/in/scottyoung5/" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-linkedin-square"></i></a>
                                                    <a href="https://www.instagram.com/scottieboyyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-instagram"></i></a>
                                                    <a href="https://www.facebook.com/scottisyoung" target="_blank" rel="noopener noreferrer"><i id="cd3" className="fa fa-facebook-square"></i></a>
                                                </div>

                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="input1">
                                                        <input name="name"
                                                               id="name"
                                                               type="text"
                                                               onChange={this.handleChange} 
                                                               placeholder="Full Name"></input>
                                                    </div>
                                                    <div className="input2">
                                                        <input name="email"
                                                               id="email"
                                                               disabled={!this.state.name} 
                                                               type="text" 
                                                               onChange={this.handleChange}
                                                               onClick={this.handleMessage} 
                                                               placeholder="Email Address"></input>
                                                    </div>
                                                    <div className="input2">
                                                        <input name="business"
                                                               id="business"
                                                               disabled={!this.state.name} 
                                                               disabled={!this.state.email}  
                                                               type="text" 
                                                               onChange={this.handleChange} 
                                                               placeholder="Business Name"></input>
                                                    </div>
                                                    <div className="input3">
                                                        <textarea id="message" 
                                                                  name="message"
                                                                  disabled={!this.state.name} 
                                                                  disabled={!this.state.email}
                                                                  onChange={this.handleChange} 
                                                                  placeholder="Message"></textarea>
                                                    </div>
                                                    <div className="sendParent">
                                                        <input id="register" 
                                                               className="sending"
                                                               describedby="name email message" 
                                                               type="submit" 
                                                               value="send"
                                                               disabled={!this.state.name}
                                                               disabled={!this.state.email}
                                                               disabled={!this.state.message} 
                                                               onClick={this.thankYou}></input>
                                                    </div>
                                                    <div id="reset" className={this.state.thankYouGiven ? "emailSent" : "cleanWindow"}>
                                                        <p>Your email has been sent, thank you.</p>
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