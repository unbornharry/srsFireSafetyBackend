import React, { Component } from 'react';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
var Carousel = require('react-responsive-carousel').Carousel;

const carouselStyle = {
    minWidth: '1000px',
    position: 'relative'
}
class carousel extends Component {
    render(){
        return(
            <div style={carouselStyle}>
                <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1000} showIndicators={true} showThumbs={false}>
                    <div>
                        <img src={require('../images/carousel/Extinguishers.jpg')} alt={""} />
                    </div>
                    <div>
                        <img src={require('../images/carousel/PpeItems.jpg')} alt={""} />
                    </div>
                    <div>
                        <img src={require('../images/carousel/PpeItems.jpg')} alt={""} />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default carousel;