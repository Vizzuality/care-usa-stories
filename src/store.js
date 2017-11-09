export function createReducer(initialState, reducers) {
  return function reducer(state = initialState, action) {
    if (typeof reducers[action.type] === 'undefined') return state;
    return reducers[action.type](state, action);
  }
}

export { homeDuck } from 'pages/home/home';