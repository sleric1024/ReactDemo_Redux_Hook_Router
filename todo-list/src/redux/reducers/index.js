import {combineReducers} from 'redux';
import todo from './todo';
import inputbar from './inputbar';

export default combineReducers({todo, inputbar});