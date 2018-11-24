import React, { Component } from 'react';
import SideMenu from '../sideMenu';
import ServiceDetails from '../serviceDetails';

export default () =>
    <div style={{midWidth: '1000px', whiteSpace : 'nowrap'}}>
        <SideMenu menuSelection='services'/>
        <ServiceDetails />
    </div>