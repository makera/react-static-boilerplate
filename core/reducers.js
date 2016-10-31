import { combineReducers } from 'redux';
import rest from './rest';


const routes = (state = {}, action) => {
  switch (action) {
    case 'COUNT':
      return { ...state, count: (state.count || 0) + 1 };
    default:
      return state;
  }
}

const reducers = Object.assign({
  routes
}, rest.reducers);

export default reducers;