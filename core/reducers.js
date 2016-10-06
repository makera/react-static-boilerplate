import { combineReducers } from 'redux';


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
})

export default reducers;