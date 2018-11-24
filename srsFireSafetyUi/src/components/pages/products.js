import React, { Component } from 'react';
import SideMenu from '../sideMenu';
import DisplayItemList from '../displayItemList';

export default () =>
    <div style={{midWidth: '1000px', whiteSpace : 'nowrap'}}>
        <SideMenu menuSelection='products'/>
        <DisplayItemList />
    </div>