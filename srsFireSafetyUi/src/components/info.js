import React, { Component } from 'react';
import Logo from './logo';

const infoStyle = {
    width: '30vw',
    minWidth: '300px',
    display: 'block',
    textAlign: 'center',
    right: '1vw',
    color: 'black',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,"Liberation Sans",Roboto,Noto,sans-serif !important',
    fontWeight: 'normal'
};

const nameStyle = {
    fontFamily: 'constantia'
};

const logoStyle = {
    verticalAlign: 'center',
    textAlign: 'center'
};

const linkStyle = {
    color: 'blue'
};


class info extends Component {
    render(){
      return(
        <div>
            <div style={logoStyle}>
                <Logo />
            </div>
            <div style={infoStyle}>
                <h2 style={nameStyle}>SRS ENTERPRISES</h2>
                <p>70A/1, K.K.NAGAR,</p>
                <p>Kavundampalayam</p>
                <p>Coimbatore - 641030</p>
                <p>Phone:  +91 99407-99273  |   +91 86952-99273</p>
                <p><a style={linkStyle} href="mailto:info@srsfiresafety.com">info@srsfiresafety.com</a></p>
                <a style={linkStyle} href="http://www.srsfiresafety.com">www.srsfiresafety.com</a>
                <p>Copyright © 2018 - SRS Enterprises. All Rights Reserved.</p>
            </div>
        </div>
       );
    }
}

export default info;

