import React, { Component } from 'react';
import Logo from './logo';
import Menu, {MenuItem} from 'rc-menu';
import '../../node_modules/rc-menu/assets/index.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Services from './pages/services';
import Projects from './projects';
import Contact from './pages/contact';
import Footer from './footer';

const headerStyle = {
    width: '100%',
    minWidth: '1000px',
    position: 'sticky',
    top: '0',
    zIndex: '1',
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
    background: 'transparent',
    color: 'white',
    borderRadius: '10px 10px 0 0'
};

const menuItemStyle = {
    fontFamiy: 'Arial, Helvetica, serif',
    fontWeight: 'bold',
    borderRadius: '10px 10px 0 0'
};

class headerAndFooter extends Component {
    componentWillMount() {
        this.setState({redirect: 'home'});
    }

    menuItemClicked = ({ key }) => {
        this.setState({redirect: key});
    };

    render(){
        return(
        <BrowserRouter>
          <div>
            <div style={headerStyle}>
                <div>
                    <Logo />
                    <h1 style={headingStyle}> SRS ENTERPRISES </h1>
                </div>
                <Menu style={menuStyle} mode="horizontal" defaultActiveFirst={true} onClick={this.menuItemClicked} activeKey={this.state.redirect}>
                    <MenuItem style={menuItemStyle} key='home'><Link style={menuItemStyle} to="/home">Home</Link></MenuItem>
                    <MenuItem style={menuItemStyle} key='products'><Link style={menuItemStyle} to="/products">Products</Link></MenuItem>
                    <MenuItem style={menuItemStyle} key='services'><Link style={menuItemStyle} to="/services">Services</Link></MenuItem>
                    <MenuItem style={menuItemStyle} key='projects'><Link style={menuItemStyle} to="/projects">Our Projects</Link></MenuItem>
                    <MenuItem style={menuItemStyle} key='contact'><Link style={menuItemStyle} to="/contact">Contact Us</Link></MenuItem>
                </Menu>
            </div>
              <Redirect to={`${this.state.redirect}`}/>
              <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/contact" component={Contact} />
                  <Route path="/" component={Home} />
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>
        );
    }
}

export default headerAndFooter;