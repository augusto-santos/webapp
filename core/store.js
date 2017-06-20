/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Reducers from './reducers'

// Centralized application state
// For more information visit http://redux.js.org/
// import Reducers from reducers a include him here
const store = createStore(
	Reducers,
	applyMiddleware(thunk)
)


export default store;
