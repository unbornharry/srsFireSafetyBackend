import React, { Component } from 'react';
import LogoImage from '../images/srsEnterprisesLogo.png';

const logoStyle = {
    minWidth: '100px',
    width: '100px',
    display: 'inline-block',
    height: '75px',
    backgroundImage: `url(${LogoImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

const backgroundStyle = {
    width: '100px',
    display: 'inline-block',
    height: '75px',
    background: '#222D32'
}

class logo extends Component {
    render(){
      return(
      <div style={backgroundStyle}>
        <div style={logoStyle}></div>
      </div>
      );
  }
}

export default logo;