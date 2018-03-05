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
                    
                        </div>
                    </ScrollableAnchor>
                </div>
            </div>
        )
    }
}

export default Contact;