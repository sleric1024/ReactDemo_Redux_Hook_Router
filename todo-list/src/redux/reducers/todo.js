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
    };

    case ADD_ITEM: {
      let {id, content} = action.payload;
      const newItemList = state.todoList.slice().concat({
        id,
        content
      });

      return {
        todoList: newItemList
      };
    }

    case DELETE_ITEM: {
      let {id} = action.payload;
      const newItemList = state.todoList.slice();
      const index = newItemList.findIndex(item => item.id === id);
      newItemList.splice(index, 1);

      return {
        todoList: newItemList
      };
    }

    default:
      return state;
  }
}