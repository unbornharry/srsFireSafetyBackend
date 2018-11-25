import React, { Component } from 'react';
import MapComponents from 'react-map-components';
import DisplayItem from './displayItem';
import PubSub from 'pubsub-js';

import attributeList from '../data/items.json';

const style = {
    display: 'inline-block',
    whiteSpace: 'normal',
    width: 'calc(100% - 330px)',
    minWidth: '670px',
    margin: '0 0 0 10px',
    minHeight: '500px',
    borderRadius: '10px',
    position: 'relative',
    verticalAlign: 'top',
    overflow: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginTop: '10px',
    textAlign: 'center'
};


class displayItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {itemList: attributeList["fireExtinguishers"]};
    }

    sideMenuSelectionUpdate = (msg, data) => {
        if(attributeList[data.selection])
            this.setState({itemList: attributeList[data.selection]});
    };

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