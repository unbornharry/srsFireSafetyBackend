import React, { Component } from 'react';

const profileStyle = {
    width: '100vw',
    minWidth: '1000px',
    display: 'block',
    clear: 'both',
    verticalAlign: 'top',
    background: '#222D32',
    margin: '10px 0',
    padding:  '20px 15px',
    color: 'white',
    fontFamily: 'verdana',
    textIndent: '20px',
    textAlign: 'justify'
};

const paraStyle = {
    textIndent: '50px',
    margin: '20px 10px'
}



class companyProfile extends Component {
    render(){
        return(
            <div>
                <div style={profileStyle}>
                    <h2>Our Aim</h2>
                    <p style={paraStyle}>We at SRS Enterprises are here to make the world a safer place for all of us. Our aim is to never allow mishaps to take away another life or bring down a family’s dream or ruin people’s careers. We whole heartedly wish and strive to equip you with the state of the art technology and best in class training to use it.</p>
                    <h2>Company Profile</h2>
                    <p style={paraStyle}>         Over the years SRS Enterprises has been constantly inspired by innovation and excellence, thereby ensuring convenience and quality to our customers. We are an ISO 9001-2015 certified company. We are committed to maintaining a good and friendly ever blooming relationship with our customers with our unmatched after-sales services, in order to ensure that we are never far out of reach when they really need us the most.
                        Products we provision are ISI and CE approved. They are agreed to be of world-class quality and of utmost reliability. Over the years we have been continuously studying international fire safety trends and standards to the best customized product suggestions to our customers. Our suggestions perfectly match the need of customers while adequately pertaining to the government standards and regulations.</p>
                    <h2>Why Choose SRS?</h2>
                    <ul style={paraStyle}>
                        <li style={paraStyle}>All safety products and services under one umbrella</li>
                        <li style={paraStyle}>Our products are ISI certified and come with a quality promise</li>
                        <li style={paraStyle}>Installation, service and maintenance support</li>
                        <li style={paraStyle}>Competitive prices</li>
                        <li style={paraStyle}>Dedicated and cooperative sales and service team</li>
                        <li style={paraStyle}>Experience working with corporates, small businesses or an individuals</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default companyProfile;

