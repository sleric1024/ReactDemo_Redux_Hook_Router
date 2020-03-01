import {
  GET_LIST,
  CHANGE_INPUT,
  ADD_ITEM,
  DELETE_ITEM
} from '../actionType';

const defaultState = {
  todoList: []
};

export default(state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST: {

      let {data} = action;
      return {
        todoList: data
      };
    }

    default:
      return state;
  }
}