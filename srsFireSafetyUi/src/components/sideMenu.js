import React, { Component } from 'react';
import {SideMenu} from 'react-sidemenu';
import '../../node_modules/react-sidemenu/dist/react-sidemenu.css';
import PubSub from 'pubsub-js';
import '../css/flaticon.css';

const style = {
//    background: 'black',
    display: 'inline-block',
    maxWidth: '320px',
    minWidth: '310px',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'auto',
    marginTop: '10px'
};

const menuItemStyle = {color: "white", fontWeight: "300", fontSize: "13px", fontFamily: 'verdana'};

const items = {
    products: [
    {divider: true, label: 'Our Products', value: 'products'},
    {label: 'Fire Extinguishers', value: 'fireExtinguishers', icon: 'flaticon-fire-extinguisher-1'},
    {label: 'Fire Hydrant System', value: 'fireHydrantSystem', icon: 'flaticon-hydrant'},
    {label: 'Smoke And Fire Detection System', value: 'smokeAndFireDetectionSystem', icon: 'flaticon-fire-alarm'},
    {label: 'Escape Signs And Lighting', value: 'escapeSignsAndLighting', icon: 'flaticon-man-silhouette-running-escaping'},
    {label: 'Safety Suits', value: 'safetySuits', icon: 'flaticon-diving-suit'},
    {label: 'Personal Protective Equipment', value: 'personalProtectiveEquipment', icon: 'flaticon-construction'},
    {label: 'Suppression System', value: 'suppressionSystem', icon: 'flaticon-fire-extinguisher'},
    {divider: true, label: 'Information', value: 'information'},
    {label: 'About Us', value: 'aboutUs', icon: 'flaticon-about-successful-man'},
    {label: 'Contact Us', value: 'contactUs', icon: 'flaticon-phone-book'}
    ],
    services: [
    {divider: true, label: 'Our Services', value: 'services'},
    {label: 'Fire safety Consultant', value: 'fireSafetyConsultant', icon: 'flaticon-professor-consultation'},
    {label: 'Fire NOC Approval', value: 'fireNocApproval', icon: 'flaticon-verified-text-paper'},
    {label: 'Fire License Approval', value: 'fireLicenseApproval', icon: 'flaticon-id-card'},
    {label: 'Fire Hydrant Drawing', value: 'fireHydrantDrawing', icon: 'flaticon-sketchbook'},
    {label: 'Fire Training Certification', value: 'fireTrainingCertification', icon: 'flaticon-diploma'},
    {label: 'Live Fire Extinguisher Demo', value: 'liveFireExtinguisherDemo', icon: 'flaticon-announcement'},
    {divider: true, label: 'Information', value: 'information'},
    {label: 'About Us', value: 'aboutUs', icon: 'flaticon-about-successful-man'},
    {label: 'Contact Us', value: 'contactUs', icon: 'flaticon-phone-book'}
    ]
};

class sideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {menuList: items[props.menuSelection]};
    }

    itemClicked = (value) =>{
        PubSub.publish('sideMenu.left', {selection: value});
    };

    mainMenuSelectionUpdate = (msg, data) => {
        if(data.selection)
            this.setState({menuList: items[data.selection]});
    }

    componentWillMount() {
        this.token = PubSub.subscribe('mainMenu', this.mainMenuSelectionUpdate);
    }

    render() {
        return(
            <div style={style}>
                    <SideMenu items={this.state.menuList} shouldTriggerClickOnParents={true} onMenuItemClick={this.itemClicked} renderMenuItemContent={(item) =>
                     (<span><i className={'fa ' + item.icon}></i><strong style={menuItemStyle}>   {item.label}</strong></span>)}/>
            </div>
        );
    }
}

export default sideMenu;