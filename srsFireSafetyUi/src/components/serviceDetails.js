import React, { Component } from 'react';
import PubSub from 'pubsub-js';

const attributeList = {
    "fireExtinguishers":[{"image": "./fireExtinguishers/automaticFireExtinguishers.png", "title": "Automatic Fire Extinguishers"},
                        {"image": "./fireExtinguishers/backupTrolleyFireExtinguishers.png", "title": "Backup Trolley Mount Fire Extinguishers"},
                        {"image": "./fireExtinguishers/carbonDioxideFireExtinguishers.png", "title": "Carbon dioxide Fire Extinguishers"},
                        {"image": "./fireExtinguishers/cleanAgentFireExtinguishers.png", "title": "Clean Agent Fire Extinguishers"},
                        {"image": "./fireExtinguishers/foamFireExtinguishers.png", "title": "Foam Fire Extinguishers"},
                        {"image": "./fireExtinguishers/mriSafeFireExtinguishers.png", "title": "MRI Safe Fire Extinguishers"},
                        {"image": "./fireExtinguishers/powderFireExtinguishers.png", "title": "Powder Fire Extinguishers"},
                        {"image": "./fireExtinguishers/waterFireExtinguishers.png", "title": "Water Fire Extinguishers"},
                        {"image": "./fireExtinguishers/waterMistFireExtinguishers.png", "title": "Water Mist Fire Extinguishers"}],
    "safetySuits":      [{"image": "./safetySuits/boilerSuits.png", "title": "Boiler Suits"},
                        {"image": "./safetySuits/fireSuits.png", "title": "Fire Suits"},
                        {"image": "./safetySuits/industrialSuits.png", "title": "Industrial Suits"}]
    };

const style = {
    display: 'inline-block',
    width: 'calc(100% - 330px)',
    whiteSpace: 'normal',
    minWidth: '670px',
    margin: '0 0 0 10px',
    minHeight: '450px',
    borderRadius: '10px',
    position: 'relative',
    verticalAlign: 'top',
    overflow: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    marginTop: '10px'
};

class serviceDetails extends Component {
    constructor(props) {
        super(props);
    }

    sideMenuSelectionUpdate = (msg, data) => {
        if(attributeList[data.selection])
            this.setState({itemList: attributeList[data.selection]});
    };

    componentDidMount() {
        this.token = PubSub.subscribe('sideMenu', this.sideMenuSelectionUpdate);
    }

    render(){
        return (
            <div style = {style} className={'grayBg'}>
            </div>
        );
    }
}
export default serviceDetails;