import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes';
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data: data
});


export const getTodoList = () => {
  return (dispatch) => {
    //https://www.easy-mock.com/mock/5dc18cbb43ff8e61fd932c49/demo01/getListDemo
    axios.get('http://localhost:3000/data').then(res => {
      const data = res;
      const action = getListAction(data);
      dispatch(action);
    });
  }
}