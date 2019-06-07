/***
 * file name : main.js
 * description : PPaper entry file
 * create date : 2019-01-09
 * creator : saltgamer
 ***/


import React from 'react';
import ReactDOM from 'react-dom';

import PPaper from './PPaper/enchanter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

import '../style/normalize.css';
import '../style/PPaper.css';
import {$PPaper} from './Globals';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <PPaper/>
    </Provider>,
    $PPaper);


