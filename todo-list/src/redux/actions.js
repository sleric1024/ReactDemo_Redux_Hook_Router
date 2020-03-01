import axios from 'axios'
import store from './store';
import {
  GET_LIST,
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM
} from './actionType';

export const getTodoList = () => {
  return (dispatch, getState, extraArgument) => {
    axios.get('http://localhost:3000/data').then(
      res => {
        const {data} = res;
        const action = getListAction(data);
        store.dispatch(action);
      }
    )
  }
};

export const getListAction = (data) => ({
  data,
  type: GET_LIST
});