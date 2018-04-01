import React, { Component } from 'react';
import MapComponents from 'react-map-components';
import DisplayItem from './displayItem';
import PubSub from 'pubsub-js';

import attributeList from '../data/items.json';

const style = {
    background: '#222d32',
    display: 'inline-block',
    width: 'calc(100% - 330px)',
    minWidth: '670px',
    margin: '0 0 0 10px',
    minHeight: '60vh',
    borderRadius: '10px',
    position: 'relative',
    verticalAlign: 'top',
    overflow: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginTop: '10px'
};


class displayItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {itemList: attributeList["fireExtinguishers"]};
    }

    sideMenuSelectionUpdate = (msg, data) => {
//        console.log("Got something on the subscription : ", msg, data)
        if(attributeList[data.selection])
            this.setState({itemList: attributeList[data.selection]});
    }

    componentDidMount() {
        this.setState({itemList: attributeList["fireExtinguishers"]});
        this.token = PubSub.subscribe('sideMenu', this.sideMenuSelectionUpdate);
    }

    render(){
        return (
            <div className = "displayItemList" style = {style}>
                <MapComponents component={DisplayItem} for={this.state.itemList} />
            </div>
        );
    }
}

export default displayItemList;