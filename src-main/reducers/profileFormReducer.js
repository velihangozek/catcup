import {PROFILE_CHANGED} from '../actions';
import {UPDATE_PROFILE} from '../actions';
const INITIAL_STATE = {
  profile: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_CHANGED:
      return {...state, profile: action.payload};
    case UPDATE_PROFILE:
      return {...state, ...INITIAL_STATE};
    default:
      return state;
  }
};
