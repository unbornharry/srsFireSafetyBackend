import React, { Component } from 'react';
import Logo from './logo';
import Menu, {MenuItem} from 'rc-menu';
import PubSub from 'pubsub-js';
import '../../node_modules/rc-menu/assets/index.css';

const headerStyle = {
    width: '100%',
    minWidth: '1000px',
    position: 'relative',
    height: '130px',
    background: '#222D32',
    textAlign: 'center',
    display: 'inline-block'
};

const headingStyle = {
    display:'inline-block',
    verticalAlign: 'top',
    margin: '10px 0 0 20px',
    color: 'white',
    fontSize: '48px',
    height: 'auto',
    fontFamily: 'constantia',
    fontWeight: 800
};

const menuStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    background: '#222D32',
    color: 'green',
    borderRadius: '10px 10px 0 0'
};

const menuItemStyle = {
    fontFamiy: 'Arial, Helvetica, serif',
    fontWeight: 'bold',
    borderRadius: '10px 10px 0 0'
};

class header extends Component {
    menuItemClicked = (value) =>{
        PubSub.publish('mainMenu', {selection: value.key});
    };

    render(){
      return(
        <div style={headerStyle}>
            <div>
                <Logo />
                <h1 style={headingStyle}> SRS ENTERPRISES </h1>
            </div>
            <Menu style={menuStyle} mode="horizontal" defaultActiveFirst={true} onClick={this.menuItemClicked}>
              <MenuItem style={menuItemStyle} key='home'>Home</MenuItem>
              <MenuItem style={menuItemStyle} key='products'>Products</MenuItem>
              <MenuItem style={menuItemStyle} key='services'>Services</MenuItem>
              <MenuItem style={menuItemStyle} key='projects'>Our Projects</MenuItem>
              <MenuItem style={menuItemStyle} key='contact'>Contact Us</MenuItem>
            </Menu>
        </div>
        );
    }
}

export default header;