import { combineReducers } from 'redux';
import counter from './counter';
import skipCounter from './skipCounter';
export default combineReducers({ counter, skipCounter});