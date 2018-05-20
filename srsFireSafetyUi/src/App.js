import React, { Component } from 'react';
import './App.css';
import PubSub from 'pubsub-js';

import SideMenuLeft from './components/sideMenu';
import Carousel from './components/carousel';
import DisplayItemList from './components/displayItemList';
import Footer from './components/footer';
import Header from './components/header';
import ServiceDetails from './components/serviceDetails';
import Projects from './components/projects';

const productsStyle = {
    width: '99vw',
    minWidth: '1000px',
    justifyContent: 'center'
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {showCarousel: true};
    }

    mainMenuSelectionUpdate = (msg, data) => {
        if(data.selection)
            switch(data.selection){
            case 'home':
                this.setState({showCarousel: true, showCatalog: false });
                break;
            case 'products':
                this.setState({showCarousel: false, showCatalog: true, sideMenuList: 'products', showItemList: true, showServiceDetail: false , showProjects: false });
                break;
            case 'services':
                this.setState({showCarousel: false, showCatalog: true, sideMenuList: 'services', showItemList: false, showServiceDetail: true, showProjects: false  });
                break;
            case 'contact':
                this.setState({showCarousel: false, showCatalog: false, showItemList: false, showServiceDetail: false, showProjects: false  });
                break;
            case 'projects':
                this.setState({showCarousel: false, showCatalog: false, showItemList: false, showServiceDetail: false, showProjects: true });
                break;
            default:
                this.setState({showCarousel: true, showCatalog: false });
                break;
            }
    }

    componentDidMount() {
        this.token = PubSub.subscribe('mainMenu', this.mainMenuSelectionUpdate);
    }

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Alike|Halant|Squada+One" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
        <Header />
        { this.state.showCarousel ? <Carousel /> : null }
        {
          this.state.showCatalog
            ? <div style={productsStyle}>
                <SideMenuLeft menuSelection={this.state.sideMenuList}/>
                { this.state.showItemList ? <DisplayItemList /> : null }
                { this.state.showServiceDetail ? <ServiceDetails /> : null }
            </div>
            : null
        }
        { this.state.showProjects ? <Projects /> : null }
        <Footer />
      </div>
    );
  }
}

export default App;