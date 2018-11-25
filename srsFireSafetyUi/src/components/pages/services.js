import React from 'react';
import SideMenu from '../sideMenu';
import ServiceDetails from '../serviceDetails';

export default () =>
    <div style={{midWidth: '1000px', whiteSpace : 'nowrap', background: 'black'}}>
        <SideMenu menuSelection='services'/>
        <ServiceDetails />
    </div>