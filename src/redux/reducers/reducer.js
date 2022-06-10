import { combineReducers } from 'redux';
import { connect } from 'react-redux';

const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const rootReducer = combineReducers({ exampleReducer });

export default rootReducer;
export default connect(mapStateToProps, mapDispatchToProps)(Component);
