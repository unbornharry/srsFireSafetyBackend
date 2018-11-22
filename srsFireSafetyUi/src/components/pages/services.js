import React, { Component } from 'react';
import SideMenu from '../sideMenu';
import ServiceDetails from '../serviceDetails';

export default () =>
    <div>
        <SideMenu menuSelection='services'/>
        <ServiceDetails />
    </div>