import React from 'react';
import { PERSONAL_FORM, PROFESSIONAL_FORM } from '../actions/actionType';

const INITIAL_STATE = {
  state: '',
};

export const personalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return { state: action.state };
  default:
    return state;
  }
};
export const professionalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM:
    return { state: action.state };
  default:
    return state;
  }
};
