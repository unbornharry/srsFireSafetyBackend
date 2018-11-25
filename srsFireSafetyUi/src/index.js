import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/headerAndFooter';

ReactDOM.render(
    <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Alike|Halant|Squada+One" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet"/>
        <Header />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
