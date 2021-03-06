/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk";

const reducer = combineReducers(reducers);

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(reducer,applyMiddleware(thunk));

export default store;
