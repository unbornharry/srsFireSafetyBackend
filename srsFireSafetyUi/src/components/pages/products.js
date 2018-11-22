import React, { Component } from 'react';
import SideMenu from '../sideMenu';
import DisplayItemList from '../displayItemList';

export default () =>
    <div>
        <SideMenu menuSelection='products'/>
        <DisplayItemList />
    </div>