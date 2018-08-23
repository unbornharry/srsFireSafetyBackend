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
    height: '400px',
    background: '#222D32',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

class footer extends Component {
    render(){
      return(
      <div style={footerStyle}>
        <Callback />
        <Info />
        <GoogleMap />
      </div>
       );
    }
}

export default footer;