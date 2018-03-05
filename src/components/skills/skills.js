import React, {Component} from 'react';
import './skills.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from 'react-slick';

class Skills extends Component {
    
    render() {

        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
        <div>
            <ScrollableAnchor id={'skills'}>
                <div className="skillsContainer">
                    <div className="sliderTitle"></div>
                        <div className="skillsScrollParent">
                        <Slider {...settings}>
                            <div className="slider"><div><h3>1</h3></div></div>
                            <div className="slider"><div><h3>2</h3></div></div>
                            <div className="slider"><div><h3>3</h3></div></div>
                            <div className="slider"><div><h3>4</h3></div></div>
                            <div className="slider"><div><h3>5</h3></div></div>
                            <div className="slider"><div><h3>6</h3></div></div>
                            <div className="slider"><div><h3>7</h3></div></div>                            
                        </Slider>
                        </div>
                </div>
            </ScrollableAnchor>
        </div>
        )
    }
}

export default Skills; 
