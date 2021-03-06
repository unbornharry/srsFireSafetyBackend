import React, { Component } from 'react';
import Info from './info';
import GoogleMap from './googleMap';
import Callback from './callback';

const footerStyle = {
    margin: '10px 0',
    padding: '20px',
    width: '100vw',
    minWidth: '1000px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class footer extends Component {
    render(){
      return(
      <div style={footerStyle} className={'grayBg'}>
        <Callback />
        <Info />
        <GoogleMap />
      </div>
       );
    }
}

export default footer;