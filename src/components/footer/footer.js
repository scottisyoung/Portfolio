import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return(
            <div>
                <div className="footerParent" id="fp">
                    <div className="copyright" id="cr"> ©2018 by Scott Young</div>
                </div>
            </div>
        )
    }
}
export default Footer;