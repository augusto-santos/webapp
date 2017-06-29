/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, applyMiddleware } from 'redux';

/** Middleware */
import thunk from 'redux-thunk'
import promise from 'redux-promise'
/** Reducers */
import Reducers from './reducers'

// devTools connection

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// Centralized application state
// For more information visit http://redux.js.org/
// import Reducers from reducers a include him here
const store = applyMiddleware(thunk, promise)(createStore)(Reducers, devTools)


export default store;
