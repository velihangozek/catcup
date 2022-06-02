import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import ProfileFormReducer from './profileFormReducer';

export default combineReducers({
  auth: AuthReducer,
  profileForm: ProfileFormReducer,
});
